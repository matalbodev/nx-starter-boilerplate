import { Module } from '@nestjs/common';
import { SharedPrismaClientModule } from '@nx-starter/shared/prisma-client';
import { ExampleModule } from './example/example.module';
import { ExampleController } from './example/example.controller';
import { ExampleService } from './example/example.service';

@Module({
  controllers: [ExampleController],
  providers: [ExampleService, ExampleController],
  exports: [ExampleController, ExampleService],
  imports: [SharedPrismaClientModule, ExampleModule],
})
export class ExampleDataAccessModule {}
