import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { urlencoded, json } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const microservicesRedis = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      // urls: ['amqp://admin:admin@localhost:5672'],
      urls: ['amqps://zrqvlyyg:34Pjmy-YRyOtsiEBNQHxaBPxM4fAtsKe@jackal.rmq.cloudamqp.com/zrqvlyyg'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  })

  app.useGlobalPipes(new ValidationPipe());
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.use(json({ limit: '50mb' }));
  await app.listen(process.env.PORT);
  Logger.log(`Server started at port: ${process.env.PORT}`, 'Bootstrap')

}
bootstrap();
