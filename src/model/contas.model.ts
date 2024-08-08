import { UserCliente } from "../model/cliente.model";
import { ContaCorrente } from "../model/contaFeature/contaCorrente";
import { ContaPoupanca } from "../model/contaFeature/contaPoupanca";
import { TipoConta } from "../enum/conta.enum";

export abstract class Contas {
  id: string;
  tipoConta: TipoConta.CORRENTE | TipoConta.POUPANCA;
  saldo: number;
  cliente: UserCliente;

  getSaldo(): number {
    return this.saldo;
  }

  saque(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo - valor;
      
      return;
    }

    throw new Error('Saldo insuficiente');
  }

  deposito(valor: number): void {
    this.saldo + valor;

    return
  }

  abstract transferencia(destino: Contas, valor: number): void;

}

export type TipoContas = ContaCorrente | ContaPoupanca



