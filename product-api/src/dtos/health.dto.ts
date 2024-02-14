import { ApiProperty } from '@nestjs/swagger';

export enum ServicesEnum {
  PRODUCT_FEED_SCHEDULER = 'product-feed-scheduler',
  PRODUCT_ENRICHER = 'product-enricher',
  PRODUCT_API = 'product-api',
}

export enum StatusEnum {
  GREEN = 'GREEN',
  RED = 'RED',
  ORANGE = 'ORANGE',
}

export class HealthDto {
  @ApiProperty()
  service: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  version: string;
}
