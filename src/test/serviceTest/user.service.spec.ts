import { Test, TestingModule } from '@nestjs/testing';
import { UserFactory } from '../../factory/user.factory';
import { UserRepository } from '../../repository/user.repository';
import { UserService } from '../../service/user.service';

jest.mock('uuidv4');

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository, UserFactory],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('Deveria criar um cliente Físico', () => {
    /* const retornado = service.criarUser(TipoCliente.FISICO, user)

    if(retornado instanceof ClienteFisico) {
      expect(retornado.usuario).toBe(user)
      expect(retornado.tipoCliente).toBe(TipoCliente.FISICO)
    } */
  });

  test('Deveria criar um cliente Juridico', () => {
    /*  const retornado = service.criarUser(TipoCliente.JURIDICO, user)

    if(retornado instanceof ClienteJuridico) {
      expect(retornado.usuario).toBe(user)
      expect(retornado.tipoCliente).toBe(TipoCliente.JURIDICO)
    } */
  });
});
