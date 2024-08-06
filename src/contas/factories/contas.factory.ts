
import { UserCliente } from 'src/cliente/userCliente.model';
import { ContaCorrente } from '../model/contaCorrente';
import { ContaPoupanca } from '../model/contaPoupanca';
import { TipoConta } from '../enum/tipoConta';


export class ContasFactory {
  criarConta(tipo: TipoConta, cliente:UserCliente):ContaCorrente|ContaPoupanca {
    
    switch (tipo) {
      case TipoConta.CORRENTE:
        const contaCorrente = new ContaCorrente();
        contaCorrente.cliente = cliente;
        contaCorrente.chequeEspecial = 150;
        contaCorrente.tipoConta = TipoConta.CORRENTE;
        contaCorrente.saldo = 0;
      
        return contaCorrente;

      case TipoConta.POUPANCA:
        const contaPoupanca =  new ContaPoupanca();
        contaPoupanca.cliente = cliente;
        contaPoupanca.taxaRendimento = 0.025;
        contaPoupanca.tipoConta = TipoConta.POUPANCA
        contaPoupanca.saldo = 10

        return contaPoupanca;

      default:
        throw new Error('Falha no tipo de conta, verifique se é um tipo valido');

    }
  } 
}
