import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  console.log('----------------------------------------------------------------port', process.env.PORT);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
