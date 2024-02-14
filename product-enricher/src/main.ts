import * as config from 'config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: (config?.kafka?.clientId || 'product'),
          brokers: (config?.kafka?.brokers || 'localhost:9093').split(','),
        },
        consumer: {
          groupId: (config?.kafka?.groupId || 'product-enricher'),
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
