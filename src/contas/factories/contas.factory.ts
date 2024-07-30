import { ContaCorrente } from '../model/contaCorrente';
import { ContaPoupanca } from '../model/contaPoupanca';
import { Contas } from '../model/contas.model';

export class ContasFactory {
  criarConta(clienteId: string, saldo: number, tipo: TipoConta): Contas {
    switch (tipo) {
      case TipoConta.CORRENTE:
        return new ContaCorrente();
      case TipoConta.POUPANCA:
        return new ContaPoupanca();
    }
  }
}
