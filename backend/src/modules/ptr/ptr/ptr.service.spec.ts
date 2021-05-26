import { Test, TestingModule } from '@nestjs/testing';
import { PtrService } from './ptr.service';

describe('PtrService', () => {
  let service: PtrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PtrService],
    }).compile();

    service = module.get<PtrService>(PtrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
