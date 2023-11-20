/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { registerPrismaShutdown } from '@nx-starter/shared/prisma-client';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await registerPrismaShutdown(app);
  const port = process.env.PORT || 3000;
  const appName = process.env.APP_NAME || '';

  const swaggerConfig = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(`The ${appName} API description`)
    .setVersion('0.1')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
