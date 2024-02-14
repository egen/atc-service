import * as config from 'config';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { HealthService } from '../services/health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @MessagePattern(config?.kafka?.topics?.health || 'health')
  getHealth(): string {
    return this.healthService.getHealth();
  }
}
