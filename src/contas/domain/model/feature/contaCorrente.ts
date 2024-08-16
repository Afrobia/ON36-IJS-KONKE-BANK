import { Contas } from '../../model/contas.entity';

export class ContaCorrente extends Contas {
  chequeEspecial: number;

  getSaldo(): number {
    return this.saldo + this.chequeEspecial;
  }

  transferencia(destiny: Contas, valor: number): void {
    if (valor <= this.getSaldo()) {
      this.saque(valor);
      destiny.deposito(valor);
      return;
    }

    throw new Error('Saldo insuficiente para transferência.');
  }
}
