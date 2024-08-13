import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from '../../service/cliente.service';
import { ClienteRepository } from '../../repository/cliente.repository';
import { UserCliente } from 'src/model/cliente.model';

describe('ClienteService', () => {
  let service: ClienteService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteService, ClienteRepository],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });



});
