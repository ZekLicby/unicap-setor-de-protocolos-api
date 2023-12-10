import * as dotenv from 'dotenv';
import * as process from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/modules/app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

dotenv.config();

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  const PORT = process.env.PORT || 3001;
  app.enableCors();
  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
