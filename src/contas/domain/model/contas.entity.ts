import { TipoConta } from '../../../enum/conta.enum';
import { TUser } from '../../../user/domain/model/user.entity';
import { ContaCorrente } from './feature/contaCorrente';
import { ContaPoupanca } from './feature/contaPoupanca';

export abstract class Contas {
  id: string;
  tipoConta: TipoConta.CORRENTE | TipoConta.POUPANCA;
  saldo: number;
  cliente: TUser;

  getSaldo(): number {
    return this.saldo;
  }

  saque(valor: number): number {
    if (valor <= this.saldo) {
      return this.saldo - valor;
    }

    throw new Error('Saldo insuficiente');
  }

  deposito(valor: number): number {
    return this.saldo + valor;
  }

  abstract transferencia(destino: Contas, valor: number): void;
}

export type TipoContas = ContaCorrente | ContaPoupanca;
