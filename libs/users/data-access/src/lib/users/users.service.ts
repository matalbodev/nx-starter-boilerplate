import { Injectable } from '@nestjs/common';
import { PrismaService, Prisma, User } from '@nx-starter/shared/prisma-client';

type UserWithoutPassword = Omit<User, 'password'>;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async userWithoutPassword(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<UserWithoutPassword | null> {
    const user = await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
    if (!user) return null;
    const userWithoutPassword = Object.fromEntries(
      Object.entries(user).filter(([key]) => !key.includes('password'))
    ) as UserWithoutPassword;

    return userWithoutPassword;
  }

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findAllUsers(options: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput;
  }): Promise<UserWithoutPassword[] | null> {
    const users = await this.prisma.user.findMany(options);
    if (!users?.length) return null;
    const usersWithoutPassword = users.map((user) =>
      Object.fromEntries(
        Object.entries(user).filter(([key]) => !key.includes('password'))
      )
    ) as UserWithoutPassword[];
    return usersWithoutPassword;
  }

  async users(options: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = options;

    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput) {
    try {
      const response = await this.prisma.user.create({
        data,
      });
      return response;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          throw new Error(`Violate constraints ${e}`);
        }
      }
      throw e;
    }
  }

  async updateUser(options: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = options;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }
}
