import { parseJsonSourceFileConfigFileContent } from "typescript";
import { Conta } from "../../base/classes/conta";

class ContaPoupanca extends Conta {
  private taxaRedimento: number = 0.05;

  constructor(clienteId: string, saldoInicial: number, taxaRedimento: number) {
    super(clienteId, saldoInicial, new SaqueConta(), new DepositoConta());
    this.taxaRedimento = taxaRedimento;
  }

  getTaxaRendimento() {
    return this.taxaRedimento;
  }

  aplicarRendimento(saldoInicial: number): void {
    const newSaldo = saldoInicial + saldoInicial * this.taxaRedimento;
    this.setSaldo(newSaldo);
  }

  doTransferencia(valor: number, contaDestinho: Conta): void {}
}

const contaPoupanca = new ContaPoupanca("Bia", 0, 0.5);
