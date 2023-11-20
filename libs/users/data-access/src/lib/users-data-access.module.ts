import { Module } from '@nestjs/common';
import { UserService } from './users/users.service';
import { SharedPrismaClientModule } from '@nx-starter/shared/prisma-client';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { ConfigService } from '@nestjs/config';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';

@Module({
  controllers: [UsersController, AuthController, ProfileController],
  providers: [UserService, AuthService, ProfileService],
  exports: [UserService, AuthService, ProfileService],
  imports: [
    SharedPrismaClientModule,
    JwtModule.registerAsync({
      global: true,
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: 24 * 60 * 60, // 24 hours
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class UsersDataAccessModule {}
