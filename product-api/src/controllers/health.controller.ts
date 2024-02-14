import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { HealthDto } from '../dtos/health.dto';
import { HealthService } from '../services/health.service';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiQuery({
    type: String,
    name: 'service',
    required: false,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [HealthDto],
  })
  findAll(@Query('service') service: string): HealthDto | HealthDto[] {
    return this.healthService.getHealth(service);
  }
}
