import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from 'src/entities/product.entity';

import { CreateProductDto } from '../../dtos/create-product.dto';
import { UpdateProductDto } from '../../dtos/update-product.dto';
import { ProductService } from '../../services/product.service';

@ApiBearerAuth()
@ApiTags('V1 - Products')
@Controller('v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
    type: CreateProductDto,
  })
  create(
    @Body() createProductDto: CreateProductDto,
    @Req() req,
  ): Promise<Product> {
    return this.productService.create(createProductDto, req.transactionId);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: [CreateProductDto],
  })
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: CreateProductDto,
  })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: String,
  })
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Req() req,
  ): Promise<string> {
    return this.productService.update(id, updateProductDto, req.transactionId);
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: String,
  })
  remove(@Param('id') id: string): Promise<string> {
    return this.productService.remove(id);
  }
}
