import { Test, TestingModule } from '@nestjs/testing';
import { GerenteController } from '../../controller/gerente.controller';
import { GerenteService } from '../../service/gerente.service';
import { ClienteService } from '../../service/cliente.service';
import { ContasService } from '../../service/contas.service';
import { GerenteRepository } from '../../repository/gerente.repository';
import { ClienteRepository } from '../../repository/cliente.repository';
import { ContasRepository } from '../../repository/contas.repository';
import { ContasFactory } from '../../factory/contas.factory';

describe('GerenteController', () => {
  let controller: GerenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerenteController],
      providers: [
        GerenteService,
        ClienteService,
        ContasService,
        GerenteRepository,
        ClienteRepository,
        ContasRepository,
        ContasFactory,
      ],
    }).compile();

    controller = module.get<GerenteController>(GerenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
