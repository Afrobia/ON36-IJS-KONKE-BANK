
import { ContaCorrente } from '../model/contaCorrente';
import { ContaPoupanca } from '../model/contaPoupanca';
import { Contas } from '../model/contas.interface';


export class ContasFactory {
  criarConta( tipo: string, clienteId: string, saldo: number):Contas|ContaCorrente|ContaCorrente {
    
    switch (tipo) {
      case "CORRENTE":
        return new ContaCorrente(tipo,clienteId,saldo);
      case "POUPANCA":
        return new ContaPoupanca(tipo,clienteId,saldo);
    }
  }

  
}
