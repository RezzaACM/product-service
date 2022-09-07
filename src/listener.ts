import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { urlencoded, json } from 'express';
import { AppModule } from './app.module';
// import { config } from './config';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.RMQ,
        options: {
            // urls: ['amqp://admin:admin@localhost:5672'],
            urls: ['amqps://zrqvlyyg:34Pjmy-YRyOtsiEBNQHxaBPxM4fAtsKe@jackal.rmq.cloudamqp.com/zrqvlyyg'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });

    await app.listen()
        .then(res => {
            Logger.log(`Microservice is listening`, 'Bootstrap')
        })
        .catch(err => {
            console.log(err);
        })


}
bootstrap();
