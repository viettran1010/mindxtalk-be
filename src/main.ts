import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe());
  
  const config = new DocumentBuilder() //config for swagger
    .setTitle('Mindxtalk OpenAPI')
    .setDescription('This document provides details on how to call APIs')
    .setVersion('1.0')
    .addTag('swagger')
    .build();
  const document = SwaggerModule.createDocument(app, config); // create swagger
  SwaggerModule.setup('api', app, document); //setup swagger
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
