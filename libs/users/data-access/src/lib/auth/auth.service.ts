import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { User } from '@nx-starter/shared/prisma-client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

export type UserWithoutPassword<T> = Omit<T, 'password'>;

const EXPIRE_TIME = 24 * 60 * 60 * 1000; // 1 day

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async signIn(
    email: string,
    password: string
  ): Promise<
    UserWithoutPassword<
      User & {
        access_token: string;
        refresh_token: string;
        expires_in: number;
      }
    >
  > {
    const user = await this.usersService.user({
      email,
    });
    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    const payload = { sub: user.id, username: user.username };
    return {
      id: user.id,
      createdAt: user.createdAt,
      email: user.email,
      username: user.username,
      role: user.role,
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '1d',
        secret: this.configService.get<string>('JWT_SECRET'),
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN'),
      }),
      expires_in: new Date().setTime(new Date().getTime() + EXPIRE_TIME)
    };
  }

  async refreshToken(user: {
    username: string;
    sub: unknown
  }) {
    const payload = { username: user.username, sub: user.sub };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '1d',
        secret: this.configService.get<string>('JWT_SECRET'),
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN'),
      }),
      expires_in: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
    };
  }
}
