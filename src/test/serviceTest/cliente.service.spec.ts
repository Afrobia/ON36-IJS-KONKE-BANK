import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from '../../service/cliente.service';
import { ClienteRepository } from '../../repository/cliente.repository';
import { User } from 'src/model/user.model';
import { ClienteFactory } from '../..//factory/userCliente.factory';
import { uuid } from 'uuidv4';
import { TipoCliente } from '../../enum/cliente.enum';
import { UserGerente } from '../../model/gerente.model';
import { ClienteFisico } from '../../model/clienteFeature/clienteFisico.model';
import { ClienteJuridico } from '../../model/clienteFeature/clienteJuridico.model';

jest.mock('uuidv4')

describe('ClienteService', () => {
  let service: ClienteService;
  let user: User
  let gerente: UserGerente

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteService, ClienteRepository, ClienteFactory],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('Deveria criar um cliente Físico', () => {
    const retornado = service.criarCliente(TipoCliente.FISICO, user, gerente)

    if(retornado instanceof ClienteFisico) {
      expect(retornado.usuario).toBe(user)
      expect(retornado.tipoCliente).toBe(TipoCliente.FISICO)
    }
  })

  test('Deveria criar um cliente Juridico', () => {
    const retornado = service.criarCliente(TipoCliente.JURIDICO, user, gerente)

    if(retornado instanceof ClienteJuridico) {
      expect(retornado.usuario).toBe(user)
      expect(retornado.tipoCliente).toBe(TipoCliente.JURIDICO)
    }
  })


});
