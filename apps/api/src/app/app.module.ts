import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard, UsersDataAccessModule } from '@nx-starter/users/data-access';
import { ExampleDataAccessModule } from '@nx-starter/example/data-access';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      isGlobal: true,
    }),
    UsersDataAccessModule,
    ExampleDataAccessModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
