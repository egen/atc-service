import { Injectable } from '@nestjs/common';
import { ProductEvent } from '../dtos/events/product.event';

@Injectable()
export class ProductService {
  async enrichProduct(message: ProductEvent): Promise<string> {
    // process message
    console.log('message: ', message);

    return 'Product has been enriched';
  }
}
