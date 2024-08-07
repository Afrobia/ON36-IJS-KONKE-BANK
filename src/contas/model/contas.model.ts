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

  saque(valor: number): number {
    if (valor <= this.saldo) {
      const newSaldo = this.saldo - valor;
      
      return newSaldo ;
    }

    throw new Error('Saldo insuficiente');
  }

  deposito(valor: number): number {
    const newSaldo = this.saldo + valor;

    return newSaldo
  }

  abstract transferencia(destino: Contas, valor: number): number;

}

export type TipoContas = ContaCorrente | ContaPoupanca



