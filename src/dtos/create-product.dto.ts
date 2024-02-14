import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sku: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(4000)
  description?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(256)
  imageUrl?: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
