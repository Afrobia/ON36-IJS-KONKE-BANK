import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../user/aplication/user.service';
import { TipoUser } from '../../enum/user.enum';
import { ClienteFisico } from '../../user/domain/model/feature/clienteFisico.model';
import { ClienteJuridico } from '../../user/domain/model/feature/clienteJuridico.model';
import { uuid } from 'uuidv4';
import { UserRepository } from '../../user/adapter/user.repository';
import { UserFactory } from '../../user/domain/factory/user.factory';
import { CreateUserDto } from '../../user/dto/create-user.dto';

jest.mock('uuidv4');

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;
  let user = new CreateUserDto();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository, UserFactory],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  test('Deveria criar um cliente Físico', () => {
    const retornado = service.criarUser(TipoUser.FISICO, user);

    if (retornado instanceof ClienteFisico) {
      expect(retornado.nome).toBe(user.nome);
      expect(retornado.endereco).toBe(user.cep);
      expect(retornado.telefone).toBe(user.telefone);
      expect(retornado.tipoUser).toBe(TipoUser.FISICO);
    }
  });

  test('Deveria criar um cliente Juridico', () => {
    const retornado = service.criarUser(TipoUser.JURIDICO, user);

    if (retornado instanceof ClienteJuridico) {
      expect(retornado.nome).toBe(user.nome);
      expect(retornado.endereco).toBe(user.cep);
      expect(retornado.telefone).toBe(user.telefone);
      expect(retornado.tipoUser).toBe(TipoUser.JURIDICO);
    }
  });

  test('Devolver um array de Usuario', () => {
    (uuid as jest.Mock).mockReturnValue('125635');
    const esperado = service.criarUser(TipoUser.FISICO, user);

    const retornado = service.findUserById('125635');

    expect(retornado).toBe(esperado);
    expect(retornado).toMatchObject(esperado);
  });

  test.failing('Deve falhar quando não encontar o id', () => {
    (uuid as jest.Mock).mockReturnValue('125635');
    const esperado = service.criarUser(TipoUser.FISICO, user);

    const retornado = service.findUserById('56831');

    expect(retornado).toBe(esperado);
    expect(retornado).toMatchObject(esperado);
  });

  test('Deveria remover usuario, não encontrar o objeto quando chamado', () => {
    (uuid as jest.Mock).mockReturnValue('598624');
    const usuario = service.criarUser(TipoUser.FISICO, user);
    service.removerUser(usuario.id);

    const retornado = service.findUserById(usuario.id);
    expect(retornado).toBeNull();
  });

  test('Usuario está autorizado', () => {
    const clienteF = service.criarUser(TipoUser.FISICO, user);
    const clienteJ = service.criarUser(TipoUser.JURIDICO, user);
    const gerente = service.criarUser(TipoUser.GERENTE, user);

    expect(clienteF.autorizado).toBe(false);
    expect(gerente.autorizado).toBe(true);
    expect(clienteJ.autorizado).toBe(false);
  })

});
