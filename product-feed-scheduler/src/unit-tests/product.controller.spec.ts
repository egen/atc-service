import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleModule } from '@nestjs/schedule';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';

describe('ProductController', () => {
  let productController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ScheduleModule.forRoot()],
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productController = app.get<ProductController>(ProductController);
  });

  describe('product', () => {
    it('should call all crons ', async () => {
      expect(await productController.getAllCronJobs()).toEqual([]);
    });
  });
});
