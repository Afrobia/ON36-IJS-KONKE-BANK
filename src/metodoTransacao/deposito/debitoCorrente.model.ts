import { Deposito } from "./deposito.interface";

export class DepositoCorrente implements Deposito {
  depositar(
    valor: number,
    saldo: number,
    atualizarSaldo: (valor: number) => void,
    getChequeEspecial: number,
  ): void {
    if (valor <= 0) {
      throw Error('Valor deve ser maior que 0');
    }
    //implementadar atualizacao de chequeespecial
    const newSaldo = saldo + getChequeEspecial + valor;
    atualizarSaldo(newSaldo);
  }

}
