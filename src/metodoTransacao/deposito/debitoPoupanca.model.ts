import { Deposito } from "./deposito.interface";

export class DepositoPoupanca implements Deposito{
  depositar(
    valor: number,
    saldo: number,
    atualizarSaldo: (valor: number) => void
  ): void {
    if (valor <= 0) {
      throw Error("Valor deve ser maior que 0");

    } else {
      const newSaldo = saldo + valor;
      atualizarSaldo(newSaldo);
    }
  }

}