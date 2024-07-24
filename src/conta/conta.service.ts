import { Injectable } from '@nestjs/common';
//import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta } from './conta.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ContaService {
  private readonly filePath = path.resolve('src/conta/contas.json')
  private idContador = 1;

  private lerConta(): Conta[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Conta[]
  }

  private modificarConta(contas: Conta[]): void{
    fs.writeFileSync(this.filePath, JSON.stringify(contas, null, 2), 'utf8')
  }

  criarConta(nomeCliente:string, saldo: number): Conta {
    const contas = this.lerConta()
    const newConta =  {
      id: contas.length> 0? contas[contas.length - 1].id + 1 : 1 ,
      nomeCliente,
      saldo,
    } ;
    contas.push(newConta);
    this.modificarConta(contas);
    return newConta
  }

  findAll() {
    return `This action returns all conta`;
  }

  findById(id: number) {
    const contas = this.lerConta();
    const conta = contas.find(contas => contas.id === id);

    if(!conta){
      throw new Error(`Conta ${id} não encontrada`);
    };

    return conta;
  }

  /* update(id: number, updateContaDto: UpdateContaDto) {
    return `This action updates a #${id} conta`;
  } */ 

  atualizarSaldo(id:number, newSaldo:number): Conta {
    const contas = this.lerConta()
    const conta = contas.find(contas => contas.id === id);
    
    if(!conta){
      throw new Error(`Conta ${id} não encontrada`);
    };
    conta.saldo = newSaldo
    this.modificarConta(contas)
     
    return conta
  }

  removerConta(id: number):void {
    const contas = this.lerConta()
    const contaIndex = contas.findIndex(contas => contas.id === id);
    
    contas.splice(contaIndex,1);
    this.modificarConta(contas)
  }
}
