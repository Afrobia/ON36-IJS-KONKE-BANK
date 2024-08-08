import { Test, TestingModule } from '@nestjs/testing';
import { ContasService } from '../../service/contas.service';
import { ContasFactory } from '../../factory/contas.factory';
import { ContasRepository } from '../../repository/contas.repository';
import { UserCliente } from '../../model/cliente.model';
import { TipoConta } from '../../enum/conta.enum';
import { ContaCorrente } from '../../model/contaFeature/contaCorrente';
import { ContaPoupanca } from '../../model/contaFeature/contaPoupanca';
import { uuid } from 'uuidv4';

jest.mock('uuidv4');

describe('ContasService', () => {
  let service: ContasService;
  let cliente = new UserCliente('Fatima', 'Qualquer lugar', 'telefone');
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContasService, ContasRepository, ContasFactory],
    }).compile();

    service = module.get<ContasService>(ContasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('criarConta, deveria receber uma nova conta Corrente da Factory', () => {
    const retornado = service.criarConta(TipoConta.CORRENTE, cliente);

    if (retornado instanceof ContaCorrente) {
      expect(retornado.cliente).toBe(cliente);
      expect(retornado.chequeEspecial).toBe(150);
      expect(retornado.saldo).toBe(0);
      expect(retornado.id).toBeDefined();
    }
  });

  test('criarConta, deveria receber uma nova conta Poupanca da Factory', () => {
    const retornado = service.criarConta(TipoConta.POUPANCA, cliente);

    if (retornado instanceof ContaPoupanca) {
      expect(retornado.cliente).toBe(cliente);
      expect(retornado.taxaRendimento).toBe(0.025);
      expect(retornado.saldo).toBe(10);
    }
  });

  test('Deveria modificar o tipo de Conta', () => {
    const conta = service.criarConta(TipoConta.POUPANCA, cliente);
    const retornado = service.modificarTipoDeConta(
      conta.id,
      TipoConta.CORRENTE,
    );

    expect(retornado).toBeInstanceOf(ContaCorrente);
  });

  test('Deveria ser igual a conta Poupança', () => {
    (uuid as jest.Mock).mockReturnValue('15586');
    const retornado = service.criarConta(TipoConta.POUPANCA, cliente);

    const esperado = new ContaPoupanca();
    esperado.id = '15586';
    esperado.tipoConta = TipoConta.POUPANCA;
    esperado.cliente = cliente;
    esperado.saldo = 10;
    esperado.taxaRendimento = 0.025;

    expect(retornado).toStrictEqual(esperado);
  });
});
