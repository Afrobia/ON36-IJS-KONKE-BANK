import { Conta } from "../../base/classes/conta";

class ContaCorrente extends Conta {
  private chequeEspecial: number;

  constructor(clienteId: string,chequeEspecial: number, saldoInicial: number) {
    super(
      clienteId,
      saldoInicial,
      new SaqueContaCorrente(),
      new DepositoContaCorrente()
    );
    this.chequeEspecial = chequeEspecial;
  }

  getChequeEspecial() {
    return this.chequeEspecial;
  }

  doTransferencia(valor: number, clienteId: Conta): void {
  }
}
