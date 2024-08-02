
import { ContaCorrente } from '../model/contaCorrente';
import { ContaPoupanca } from '../model/contaPoupanca';


export class ContasFactory {
  criarConta(clienteId: string, saldo: number, tipo: TipoConta) {
    switch (tipo) {
      case TipoConta.CORRENTE:
        return new ContaCorrente();
      case TipoConta.POUPANCA:
        return new ContaPoupanca();
    }
  }
}
