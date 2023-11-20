// other exports in libs index.ts
import { INestApplication } from '@nestjs/common';
import { PrismaService } from './lib/prisma.service';
export * from './lib/shared-prisma-client.module';
export * from './lib/prisma.service';
export { Prisma, User, Profile } from '@prisma/client/shared';

export async function registerPrismaShutdown(app: INestApplication) {
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
