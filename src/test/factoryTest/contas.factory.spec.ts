import { TipoConta } from '../../enum/conta.enum';
import { ContasFactory } from '../../contas/domain/factory/contas.factory';
import { ContaCorrente } from '../../contas/domain/model/feature/contaCorrente';
import { ContaPoupanca } from '../../contas/domain/model/feature/contaPoupanca';
import { ClienteFisico } from '../../user/domain/model/feature/clienteFisico.model';

describe('Contas factory', () => {
  let cliente = new ClienteFisico();
  //criar conta conrrente
  test('Deveria criar uma conta corrente', () => {
    const contaFactory = new ContasFactory();
    const retornado = contaFactory.criarConta(TipoConta.CORRENTE, cliente);

    if (retornado instanceof ContaCorrente) {
      expect(retornado.cliente).toBe(cliente.id);
      expect(retornado.chequeEspecial).toBe(150);
      expect(retornado.saldo).toBe(0);
    }
  });
  //criar conta poupança
  test('Deveria criar uma conta poupanca', () => {
    const contaFactory = new ContasFactory();
    const retornado = contaFactory.criarConta(TipoConta.POUPANCA, cliente);

    if (retornado instanceof ContaPoupanca) {
      expect(retornado.cliente).toBe(cliente.id);
      expect(retornado.taxaRendimento).toBe(0.025);
      expect(retornado.saldo).toBe(10);
    }
  });

  test.failing('Um tipo de conta diferente deveria falhar', () => {
    const contaFactory = new ContasFactory();
    const retornado = contaFactory.criarConta(TipoConta.INVESTIMENTO, cliente);

    expect(retornado).toBe(Object);
  });
});
