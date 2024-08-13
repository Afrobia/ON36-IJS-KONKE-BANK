import { TClientes, UserCliente } from '../model/cliente.model';
import { ContaCorrente } from '../model/contaFeature/contaCorrente';
import { ContaPoupanca } from '../model/contaFeature/contaPoupanca';
import { TipoConta } from '../enum/conta.enum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContasFactory {
  criarConta(
    tipo: TipoConta,
    cliente: TClientes,
  ): ContaCorrente | ContaPoupanca {
    switch (tipo) {
      case TipoConta.CORRENTE:
        const contaCorrente = new ContaCorrente();
        contaCorrente.cliente = cliente.id;
        contaCorrente.chequeEspecial = 150;
        contaCorrente.tipoConta = TipoConta.CORRENTE;
        contaCorrente.saldo = 0;

        return contaCorrente;

      case TipoConta.POUPANCA:
        const contaPoupanca = new ContaPoupanca();
        contaPoupanca.cliente = cliente.id;
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
