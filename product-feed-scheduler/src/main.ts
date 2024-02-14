import * as config from 'config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: config?.host || '0.0.0.0',
      port: config?.port || 8081,
    },
  });

  await app.listen();
}
bootstrap();
