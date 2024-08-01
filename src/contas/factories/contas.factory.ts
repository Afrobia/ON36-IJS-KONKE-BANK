import { Saque } from 'src/metodoTransacao/saque/saque.interface';
import { ContaCorrente } from '../model/contaCorrente';
import { ContaPoupanca } from '../model/contaPoupanca';
import { Deposito } from 'src/metodoTransacao/deposito/deposito.interface';

export abstract class ContasFactory {
  criarConta(clienteId: string, saldo: number, tipo: TipoConta,saque:Saque, deposito:Deposito) {
    switch (tipo) {
      case TipoConta.CORRENTE:
        return new ContaCorrente();
      case TipoConta.POUPANCA:
        return new ContaPoupanca();
    }
  }
}
