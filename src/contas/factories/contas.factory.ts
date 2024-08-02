
import { ContaCorrente } from '../model/contaCorrente';
import { ContaPoupanca } from '../model/contaPoupanca';
import { Contas } from '../model/contas.interface';


export class ContasFactory {
  criarConta( tipo: string,id:number, clienteId: string, saldo: number):Contas {
    
    switch (tipo) {
      case "CORRENTE":
        return new ContaCorrente(id,tipo,clienteId,saldo);
      case "POUPANCA":
        return new ContaPoupanca(id,tipo,clienteId,saldo);
    }
  }

  
}
