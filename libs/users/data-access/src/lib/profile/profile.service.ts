import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '@nx-starter/shared/prisma-client';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  findAll() {
    return `This action returns all profile`;
  }

  async findOne(id: number) {
    const profile = await this.prisma.profile.findUnique({
      where: {
        userId: id,
      },
      include: {
        user: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    });
    return profile;
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {

    const updatedProfile = await this.prisma.profile.update({
      where: {
        id,
      },
      data: {
        ...updateProfileDto,
      },
    });
    return updatedProfile;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
