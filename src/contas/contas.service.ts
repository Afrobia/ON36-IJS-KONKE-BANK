import { Injectable } from '@nestjs/common';
import { Contas } from './model/contas.model';
import * as path from 'path';
import * as fs from 'fs'

@Injectable()
export class ContasService {
    private readonly filePath = path.resolve('src/conta/contas.json');

    private lerConta(): Contas[] {
      const data = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data) as Contas[]
    }
  
    private modificarConta(contas: Contas[]): void{
    }
  
    criarConta(saldo: number, tipo: TipoConta): Contas {
        const contas = this.lerConta()
        const newConta =  {
          id: contas.length> 0? contas[contas.length - 1].id + 1 : 1 ,
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

    findAll():Contas[]  {
      return this.lerConta();
    }
    
    removerConta(id: number):void {
        const contas = this.lerConta()
        const contaIndex = contas.findIndex(contas => contas.id === id);
        
        contas.splice(contaIndex,1);
        this.modificarConta(contas);
    }
  
    atualizarSaldo(id:number, newSaldo:number): Contas {
      const contas = this.lerConta()
      const conta = contas.find(contas => contas.id === id);
      
      if(!conta){
        throw new Error(`Conta ${id} não encontrada`);
      };
      conta.saldo = newSaldo
      this.modificarConta(contas)
       
      return conta
    }

}
