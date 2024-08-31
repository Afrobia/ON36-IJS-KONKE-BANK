import { TUser } from '../../../user/domain/model/user.entity';
import { ContaCorrente } from '../model/feature/contaCorrente';
import { ContaPoupanca } from '../model/feature/contaPoupanca';
import { TipoConta } from '../../../enum/conta.enum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContasFactory {
  criarConta(tipo: TipoConta, cliente: TUser): ContaCorrente | ContaPoupanca {
    switch (tipo) {
      case TipoConta.CORRENTE:
        const contaCorrente = new ContaCorrente();
        contaCorrente.cliente.id = cliente.id;
        contaCorrente.chequeEspecial = 150;
        contaCorrente.tipoConta = TipoConta.CORRENTE;
        contaCorrente.saldo = 0;

        return contaCorrente;

      case TipoConta.POUPANCA:
        const contaPoupanca = new ContaPoupanca();
        contaPoupanca.cliente.id = cliente.id;
        contaPoupanca.taxaRendimento = 0.025;
        contaPoupanca.tipoConta = TipoConta.POUPANCA;
        contaPoupanca.saldo = 10;

        return contaPoupanca;

      default:
        throw new Error(
          'Falha no tipo de conta, verifique se é um tipo valido',
        );
    }
  }
}
