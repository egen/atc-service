import * as config from 'config';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ProductService } from '../services/product.service';
import { ProductEvent } from '../dtos/events/product.event';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern(config?.kafka?.topics?.product || 'product')
  enrichProduct(@Payload() message: ProductEvent): Promise<string> {
    return this.productService.enrichProduct(message);
  }
}
