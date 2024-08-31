import { Test, TestingModule } from '@nestjs/testing';
import { ContasService } from '../../contas/aplication/contas.service';
import { ContasFactory } from '../../contas/domain/factory/contas.factory';
import { TipoConta } from '../../enum/conta.enum';
import { ContaCorrente } from '../../contas/domain/model/feature/contaCorrente';
import { ContaPoupanca } from '../../contas/domain/model/feature/contaPoupanca';
import { uuid } from 'uuidv4';
import { ClienteFisico } from '../../user/domain/model/feature/clienteFisico.model';
import { ContasRepository } from '../../contas/adapter/outbound/contas.repository';

jest.mock('uuidv4');

describe('ContasService', () => {
  let service: ContasService;
  let repository: ContasRepository;
  let cliente = new ClienteFisico();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContasService, ContasRepository, ContasFactory],
    }).compile();

    service = module.get<ContasService>(ContasService);
    repository = module.get<ContasRepository>(ContasRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('criarConta, deveria receber uma nova conta Corrente da Factory', () => {
    const retornado = service.criarConta(TipoConta.CORRENTE, cliente);

    if (retornado instanceof ContaCorrente) {
      expect(retornado.cliente).toBe(cliente.id);
      expect(retornado.chequeEspecial).toBe(150);
      expect(retornado.saldo).toBe(0);
     
    }
  });

  test('criarConta, deveria receber uma nova conta Poupanca da Factory', () => {
    const retornado = service.criarConta(TipoConta.POUPANCA, cliente);

    if (retornado instanceof ContaPoupanca) {
      expect(retornado.cliente).toBe(cliente.id);
      expect(retornado.taxaRendimento).toBe(0.025);
      expect(retornado.saldo).toBe(10);
    }
  });

  test('Deveria modificar o tipo de Conta', () => {
    const conta = service.criarConta(TipoConta.POUPANCA, cliente);
    const retornado = service.modificarTipoDeConta(
      conta.id,
      TipoConta.CORRENTE
    );

    expect(retornado).toBeInstanceOf(ContaCorrente);
  });

  test('Deveria ser igual a conta Poupança', () => {
    (uuid as jest.Mock).mockReturnValue('15586');
    const retornado = service.criarConta(TipoConta.POUPANCA, cliente);

    const esperado = new ContaPoupanca();
    esperado.id = '15586';
    esperado.tipoConta = TipoConta.POUPANCA;
    esperado.cliente.id = cliente.id;
    esperado.saldo = 10;
    esperado.taxaRendimento = 0.025;

    expect(retornado).toStrictEqual(esperado);
  });

  test('Minha lista de contas está recebendo minhas novas contas, buscando pelo ID', () => {
    (uuid as jest.Mock).mockReturnValue('15586');
    const esperado = service.criarConta(TipoConta.CORRENTE, cliente);

    const retornado = repository.findContaById('15586');

    expect(retornado).toBe(esperado);
    expect(retornado).toMatchObject(esperado);
  });

  test('Deveria me retornar Nulo, quando não tiver um Id correspondente', () => {
    const retornado = repository.findContaById('15586');

    expect(retornado).toBeNull();
  });

  test.failing('Teste de falha, se o retornado for uma conta', () => {
    (uuid as jest.Mock).mockReturnValue('598624');
    const conta = service.criarConta(TipoConta.CORRENTE, cliente);
    service.removerConta(conta.id);

    const retornado = repository.findContaById('598624');
    expect(retornado).toBe(conta);
  });

  test('Deveria remover cliente, não encontrar o objeto quando chamado', () => {
    (uuid as jest.Mock).mockReturnValue('598624');
    const conta = service.criarConta(TipoConta.CORRENTE, cliente);
    service.removerConta(conta.id);

    const retornado = repository.findContaById('598624');
    expect(retornado).toBeNull();
  });

  test.failing(
    'Deve falhar caso cliente tente criar duas contas do mesmo tipoPoupança',
    () => {
      const conta = service.criarConta(TipoConta.POUPANCA, cliente);

      if (conta instanceof ContaPoupanca) {
        const esperado2 = service.criarConta(TipoConta.POUPANCA, cliente);

        expect(esperado2).toBeInstanceOf(ContaPoupanca);
      }
    },
  );

  test.failing(
    'Deve falhar caso cliente tente criar duas contas do mesmo tipoCorrente',
    () => {
      const conta = service.criarConta(TipoConta.CORRENTE, cliente);

      if (conta instanceof ContaCorrente) {
        const esperado2 = service.criarConta(TipoConta.CORRENTE, cliente);

        expect(esperado2).toBeInstanceOf(ContaCorrente);
      }
    },
  );

  test('Cliente deve pode ter 1 conta corrente e uma conta poupança', () => {
    const contaC = service.criarConta(TipoConta.CORRENTE, cliente);

    if (contaC instanceof ContaCorrente) {
      const contaP = service.criarConta(TipoConta.POUPANCA, cliente);

      expect(contaP).toBeInstanceOf(ContaPoupanca);
    }
  });

  test('Conta deve conseguir fazer depositar', () => {
    const conta = service.criarConta(TipoConta.CORRENTE, cliente);
    service.doDeposito(conta.id, 50);

    const esperado = 50;
    const retornado = conta.saldo;

    expect(retornado).toBe(esperado);
  });

  test.failing('Conta não deve conseguir sacar', () => {
    const conta = service.criarConta(TipoConta.CORRENTE, cliente);
    const retornado = service.doSaque(conta.id, 50);

    expect(retornado).toBe(true);
  });

  test('Conta deve conseguir sacar', () => {
    const conta = service.criarConta(TipoConta.CORRENTE, cliente);
    service.doDeposito(conta.id, 100);
    const retornado = service.doSaque(conta.id, 50);

    expect(retornado).toBe(true);
    expect(conta.saldo).toBe(50);
  });
});
