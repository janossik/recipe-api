import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as ip from 'ip';
import { ValidationPipe } from '@nestjs/common';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n\x1b[32m[recipe-api] Server is running on:\t\x1b[36mhttp://localhost:${PORT}\n\t\t\t\t\thttp://${ip.address()}:${PORT}\x1b[0m`);
  });
}
bootstrap();
