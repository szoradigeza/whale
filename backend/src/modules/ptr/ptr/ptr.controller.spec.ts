import { Test, TestingModule } from '@nestjs/testing';
import { PtrController } from './ptr.controller';

describe('Ptr Controller', () => {
  let controller: PtrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PtrController],
    }).compile();

    controller = module.get<PtrController>(PtrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
