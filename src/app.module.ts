import * as config from 'config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthController } from './controllers/health.controller';
import { ProductController } from './controllers/v1/product.controller';
import { HealthService } from './services/health.service';
import { ProductService } from './services/product.service';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';
import { AuthGuard } from './guards/auth.guard';
import { Product } from './entities/product.entity';
import { HttpExceptionFilter } from './utilities/http-exception.filter';
import { ApiInterceptor } from './utilities/api.interceptor';
import { EmployeeService } from './services/employee.service';
import { EmployeeController } from './controllers/v1/employee.controller';
import { Employee } from './entities/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.orm),
    TypeOrmModule.forFeature([Product, Employee]),
  ],
  controllers: [HealthController, ProductController, EmployeeController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ApiInterceptor,
    },
    HealthService,
    ProductService,
    EmployeeService,
  ],
})
export class AppModule {}
