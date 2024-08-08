import { Test, TestingModule } from '@nestjs/testing';
import { ContasService } from '../../service/contas.service';
import { ContasFactory } from '../../factory/contas.factory';
import { ContasRepository } from '../../repository/contas.repository';

describe('ContasService', () => {
  let service: ContasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers: [ContasService, ContasRepository ,ContasFactory],
    }).compile();

    service = module.get<ContasService>(ContasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
