import { Injectable } from '@nestjs/common';
import { Conta } from './conta.model';
import * as path from 'path';
import * as fs from 'fs';


@Injectable()
export class ContaService {
  
  private readonly filePath = path.resolve('src/conta/contas.json')
  private lerConta(): Conta[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Conta[]
  }

  private modificarConta(contas: Conta[]): void{
  }

  criarConta(saldo: number, tipo: 'corrente' | 'poupanca', transacao: Transacao): Conta {
      const contas = this.lerConta()
      const newConta =  {
        contaId: contas.length> 0? contas[contas.length - 1].contaId + 1 : 1 ,
        saldo,
        tipo,
        transacao
      } ;
      contas.push(newConta);
      this.modificarConta(contas);
      return newConta
    }
  
  findById(id: number) {
      const contas = this.lerConta();
      const conta = contas.find(contas => contas.contaId === id);
  
      if(!conta){
        throw new Error(`Conta ${id} não encontrada`);
      };
        return conta;
      }
  
  
  removerConta(id: number):void {
      const contas = this.lerConta()
      const contaIndex = contas.findIndex(contas => contas.contaId === id);
      
      contas.splice(contaIndex,1);
      this.modificarConta(contas)
    }
  findAll():Conta[]  {
    return this.lerConta();
  }

  atualizarSaldo(id:number, newSaldo:number): Conta {
    const contas = this.lerConta()
    const conta = contas.find(contas => contas.contaId === id);
    
    if(!conta){
      throw new Error(`Conta ${id} não encontrada`);
    };
    conta.saldo = newSaldo
    this.modificarConta(contas)
     
    return conta
  }
}
