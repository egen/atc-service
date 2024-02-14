import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from '../services/health.service';
import { HealthController } from '../controllers/health.controller';

describe('HealthController', () => {
  let healthController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService],
    }).compile();

    healthController = app.get<HealthController>(HealthController);
  });

  describe('health', () => {
    it('should return "green"', () => {
      expect(healthController.getHealth()).toBe('green');
    });
  });
});
