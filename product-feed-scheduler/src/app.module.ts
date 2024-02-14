import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HealthController } from './controllers/health.controller';
import { ProductController } from './controllers/product.controller';
import { HealthService } from './services/health.service';
import { ProductService } from './services/product.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [HealthController, ProductController],
  providers: [HealthService, ProductService],
})
export class AppModule {}
