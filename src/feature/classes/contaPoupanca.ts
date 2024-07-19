/* import { parseJsonSourceFileConfigFileContent } from "typescript";

class ContaPoupanca extends Conta {
  private taxaRedimento: number = 0.05;

  constructor(saldoInicialInicial: number, taxaRedimento: number) {
    super(saldoInicialInicial, new SaqueConta(), new DepositoConta());
    this.taxaRedimento = taxaRedimento;
  }

  getTaxaRendimento() {
    return this.taxaRedimento
  }

  aplicarRendimento(saldoInicial:number): void {
    const newSaldo = saldoInicial + (saldoInicial * this.taxaRedimento)
    this.setSaldo(newSaldo)
  }

}

const contaPoupanca = new ContaPoupanca(0,0.5)

 */