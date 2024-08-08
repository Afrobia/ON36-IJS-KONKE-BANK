import { Test, TestingModule } from '@nestjs/testing';
import { ContasService } from '../../service/contas.service';
import { ContasFactory } from '../factories/contas.factory';
import { ContasRepository } from '../contas.repository';

describe('ContasService', () => {
  let service: ContasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[ContasFactory, ContasRepository],
      providers: [ContasService],
    }).compile();

    service = module.get<ContasService>(ContasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
