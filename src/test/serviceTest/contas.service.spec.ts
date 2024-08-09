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
  let repository: ContasRepository;
  let cliente = new UserCliente('Fatima', 'Qualquer lugar', 'telefone');

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

  test('Minha lista de contas está recebendo minhas novas contas, buscando pelo ID', () => {
    (uuid as jest.Mock).mockReturnValue('15586');
    const esperado = service.criarConta(TipoConta.CORRENTE, cliente);

    const retornado = repository.findContaById('15586');

    expect(retornado).toBe(esperado);
    expect(retornado).toMatchObject(esperado)
   
  });

  test('Deveria me retornar Nulo, quando não tiver um Id correspondente', () => {
    const retornado = repository.findContaById('15586');

    expect(retornado).toBeNull();
  });

  test('Deveria remover cliente, não encontrar o objeto quando chamado', () => {
    (uuid as jest.Mock).mockReturnValue('598624');
    const conta = service.criarConta(TipoConta.CORRENTE, cliente);
    service.removerConta(conta.id)


    const retornado = repository.findContaById('598624');
    expect(retornado).toBeNull()
    
  })

  test('Service está criando contas Duplicadas', ()=>{
    const esperado1 = service.criarConta(TipoConta.POUPANCA, cliente);
    const esperado2 = service.criarConta(TipoConta.POUPANCA, cliente);

    expect(esperado1).toBeInstanceOf(ContaPoupanca);
    expect(esperado2).toBeInstanceOf(ContaPoupanca);

    expect(esperado1.cliente).toStrictEqual(esperado2.cliente)

    //necessário verificação de cliente antes de criar conta, 
    //para cliente não ter mais de uma conta do mesmo tipo
  })
  
});
