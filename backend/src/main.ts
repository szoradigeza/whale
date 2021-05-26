import { NestFactory } from '@nestjs/core';
import {
   FastifyAdapter,
   NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.enableCors();

   const configService = app.get(ConfigService);
   const port = configService.get('PORT');

   await app.listen(port);
}
bootstrap();
