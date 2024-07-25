import { Injectable } from '@nestjs/common';
import { Conta } from './conta.model';
import * as path from 'path';
import * as fs from 'fs';
import { TipoConta } from './tipoConta.enum';

@Injectable()
export class ContaService {
  private readonly filePath = path.resolve('src/conta/contas.json')

  private lerConta(): Conta[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Conta[]
  }

  private modificarConta(contas: Conta[]): void{
  }

  criarConta(clienteId:string, saldo: number, tipo: TipoConta): Conta {
      const contas = this.lerConta()
      const newConta =  {
        id: contas.length> 0? contas[contas.length - 1].id + 1 : 1 ,
        clienteId,
        saldo,
        tipo
      } ;
      contas.push(newConta);
      this.modificarConta(contas);
      return newConta
    }
  
  findById(id: number) {
      const contas = this.lerConta();
      const conta = contas.find(contas => contas.id === id);
  
      if(!conta){
        throw new Error(`Conta ${id} não encontrada`);
      };
        return conta;
      }
  
  modificarTipoConta(id:number, tipo:TipoConta): Conta {
        const contas = this.lerConta()
        const conta = contas.find(contas => contas.id === id);
        if(!conta){
          throw new Error(`Conta ${id} não encontrada`);
        };
  
        if(conta.tipo == "Corrente"){
           conta.tipo = TipoConta.POUPANCA
        }else if(conta.tipo == "Poupanca"){
           conta.tipo = TipoConta.CORRENTE
        }
       
        this.modificarConta(contas) 
        return conta
      }
  
  removerConta(id: number):void {
      const contas = this.lerConta()
      const contaIndex = contas.findIndex(contas => contas.id === id);
      
      contas.splice(contaIndex,1);
      this.modificarConta(contas)
    }
  findAll():Conta[]  {
    return this.lerConta();
  }
 
}
