import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import productEvent from './__mocks__/productEvent';

describe('ProductController', () => {
  let productController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productController = app.get<ProductController>(ProductController);
  });

  describe('product', () => {
    it('should call enrich pro', async () => {
      expect(await productController.enrichProduct(productEvent())).toBe(
        'Product has been enriched',
      );
    });
  });
});
