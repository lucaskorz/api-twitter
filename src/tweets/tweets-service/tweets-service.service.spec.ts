import { Test, TestingModule } from '@nestjs/testing';
import { TweetsServiceService } from './tweets-service.service';

describe('TweetsServiceService', () => {
  let service: TweetsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsServiceService],
    }).compile();

    service = module.get<TweetsServiceService>(TweetsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
