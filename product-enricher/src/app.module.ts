import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { ProductController } from './controllers/product.controller';
import { HealthService } from './services/health.service';
import { ProductService } from './services/product.service';

@Module({
  imports: [],
  controllers: [HealthController, ProductController],
  providers: [HealthService, ProductService],
})
export class AppModule {}
