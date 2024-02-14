import { Test, TestingModule } from '@nestjs/testing';
import { Reflector } from '@nestjs/core';

import { RolesGuard } from '../../guards/roles.guard';

class ReflectorMock {
  handlerUnprotected: boolean | undefined;
  classUnprotected: boolean | undefined;
}

describe('RolesGuard', () => {
  let rolesGuard: RolesGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesGuard,
        {
          provide: Reflector,
          useClass: ReflectorMock,
        },
      ],
    }).compile();

    rolesGuard = module.get<RolesGuard>(RolesGuard);
  });

  it('should be defined', () => {
    expect(rolesGuard).toBeDefined();
  });
});
