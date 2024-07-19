import { Conta } from "../../base/classes/conta";

class ContaCorrente extends Conta {
  private chequeEspecial: number;

  constructor(chequeEspecial: number, saldoInicial: number) {
    super(saldoInicial, new SaqueContaCorrente(), new DepositoContaCorrente());
    this.chequeEspecial = chequeEspecial;
  }

  getChequeEspecial() {
    return this.chequeEspecial;
  }

}
