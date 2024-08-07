import { UserCliente } from "src/cliente/userCliente.model";
import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";
import { TipoConta } from "../enum/tipoConta";

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



