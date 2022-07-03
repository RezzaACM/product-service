import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { urlencoded, json } from 'express';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.PORT);
  app.useGlobalPipes(new ValidationPipe());
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.use(json({ limit: '50mb' }));
  Logger.log(`Server started at port: ${config.PORT}`, 'Bootstrap')

}
bootstrap();
