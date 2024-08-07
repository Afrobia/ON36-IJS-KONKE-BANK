import { Contas } from "./contas.model";


export class ContaPoupanca extends Contas{
    taxaRendimento: number;

    transferencia(destino: Contas, valor: number): void {
      if (valor <= this.saldo) {
        this.saque(valor);
        destino.deposito(valor);
        return
      }
  
      throw new Error('Saldo insuficiente para transferência.');
    };
}