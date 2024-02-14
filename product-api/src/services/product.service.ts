import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { LoggerHelper } from '../utilities/logger';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { ProductRepository } from '../repositories/product.repository';

@Injectable()
export class ProductService {
  logger: LoggerHelper;
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: ProductRepository,
  ) {
    this.logger = new LoggerHelper('ProductService');
  }

  async create(
    createProductDto: CreateProductDto,
    transactionId: number,
  ): Promise<Product> {
    const product = await this.productRepository.save(createProductDto);

    this.logger.log(transactionId, 'Created new product!');

    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    return this.productRepository.findOneByOrFail({ id });
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
    transactionId: number,
  ): Promise<string> {
    await this.findOne(id);
    await this.productRepository.update(id, updateProductDto);
    this.logger.log(transactionId, `Updated product ${id}!`);

    return `Successfully updated product ${id}`;
  }

  async remove(id: string): Promise<string> {
    await this.productRepository.delete(id);

    return `Successfully deleted product ${id}`;
  }
}
