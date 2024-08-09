import { Test, TestingModule } from '@nestjs/testing';
import { GerenteService } from '../../service/gerente.service';
import { GerenteRepository } from '../../repository/gerente.repository';
import { ClienteService } from '../../service/cliente.service';
import { ContasService } from '../../service/contas.service';
import { ClienteRepository } from '../../repository/cliente.repository';
import { ContasRepository } from '../../repository/contas.repository';
import { ContasFactory } from '../../factory/contas.factory';

describe('GerenteService', () => {
  let service: GerenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GerenteService,
        GerenteRepository,
        ClienteService,
        ClienteRepository,
        ContasService,
        ContasRepository,
        ContasFactory,
      ],
    }).compile();

    service = module.get<GerenteService>(GerenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
