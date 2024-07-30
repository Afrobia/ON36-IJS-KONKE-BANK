import { Contas } from 'src/contas/model/contas.model';

interface FuncoesBancarias {
  sacar(
    valor: number,
    saldo: number,
    atualizarSaldo: (valor: number) => void,
    saldoSuplementar?: number,
  ): void;

  depositar(
    valor: number,
    saldo: number,
    atualizarSaldo: (valor: number) => void,
    saldoSuplementar?: number,
  ): void;
}

class FuncoesBancCorrente implements FuncoesBancarias {
  sacar(
    valor: number,
    saldo: number,
    atualizarSaldo: (valor: number) => void,
    getChequeEspecial: number,
  ) {
    if (valor === 0) {
      throw Error('Valor deve ser maior que 0');
    }

    if (saldo >= valor) {
      const newSaldo = saldo - valor;

      atualizarSaldo(newSaldo);
    } else if (getChequeEspecial + saldo >= valor) {
      const newSaldo = getChequeEspecial + saldo - valor;

      atualizarSaldo(newSaldo);
    } else {
      throw new Error('Transação negada, saldo infuciente');
    }
  }

  depositar(
    valor: number,
    saldo: number,
    atualizarSaldo: (valor: number) => void,
    getChequeEspecial: number,
  ): void {
    if (valor <= 0) {
      throw Error('Valor deve ser maior que 0');
    } else {
      const newSaldo = saldo + getChequeEspecial + valor;
      atualizarSaldo(newSaldo);
    }
  }
}

class FuncoesBancPoupanca implements FuncoesBancarias{
  sacar(valor: number, saldo: number, atualizarSaldo: (value: number) => void) {
    if (valor === 0) {
      throw Error("Valor deve ser maior que 0");
    }

    if (saldo >= valor) {
      const newSaldo = saldo - valor;
      atualizarSaldo(newSaldo);
    }
  }

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
