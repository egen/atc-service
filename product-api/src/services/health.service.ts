import { Injectable } from '@nestjs/common';

import { HealthDto, ServicesEnum, StatusEnum } from '../dtos/health.dto';

@Injectable()
export class HealthService {
  getHealth(service?: string): HealthDto | HealthDto[] {
    if (service) {
      return [
        {
          service,
          status: StatusEnum.GREEN,
          version: '1.0.0',
        },
      ];
    }

    return [
      {
        service: ServicesEnum.PRODUCT_API,
        status: StatusEnum.GREEN,
        version: '1.0.0',
      },
      {
        service: ServicesEnum.PRODUCT_ENRICHER,
        status: StatusEnum.ORANGE,
        version: '1.1.0',
      },
      {
        service: ServicesEnum.PRODUCT_FEED_SCHEDULER,
        status: StatusEnum.RED,
        version: '2.1.1',
      },
    ];
  }
}
