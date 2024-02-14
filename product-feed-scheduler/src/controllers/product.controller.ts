import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from '../services/product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('cron.product.jobs.getAll')
  async getAllCronJobs(): Promise<any[]> {
    return this.productService.getCrons();
  }

  @MessagePattern('cron.product.jobs.get')
  async getCronJobByName(@Payload() message: string): Promise<any> {
    return this.productService.getCronByName(message);
  }

  @MessagePattern('cron.product.jobs.start')
  async startCronJob(@Payload() message: string): Promise<any> {
    return this.productService.startCronJob(message);
  }

  @MessagePattern('cron.product.jobs.stop')
  async stopCronJob(@Payload() message: string): Promise<any> {
    return this.productService.stopCronJob(message);
  }

  @MessagePattern('cron.product.jobs.add')
  async addCronJob(
    @Payload() message: { name: string; expression: string },
  ): Promise<any> {
    return this.productService.addCronJob(message.name, message.expression);
  }
}
