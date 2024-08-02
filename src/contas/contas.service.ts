import { Injectable, NotFoundException } from '@nestjs/common';
import { Contas } from './model/contas.interface';
import * as path from 'path';
import * as fs from 'fs';
import { ContasFactory } from './factories/contas.factory';
import { ClienteService } from 'src/cliente/cliente.service';


@Injectable()
export class ContasService {
  private readonly filePath = path.resolve('src/.json/contas.json');
  

  constructor(
    private readonly clienteService: ClienteService,
    private readonly contasFactory: ContasFactory,

  ) {
    const contas = this.lerConta();
    const id = contas.length > 0 ? contas[contas.length - 1].id + 1 : 1;
  }

  private lerConta(): Contas[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Contas[];
  }

  private modificarContas(contas: Contas[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(contas, null, 2), 'utf8');
  }

  criarConta(tipo: string, clienteId: string, saldo: number) {
    const contas = this.lerConta();
    const cliente = this.clienteService.findById(clienteId)

    const newConta = this.contasFactory.criarConta(tipo, clienteId, saldo);
    contas.push(newConta);
    cliente.contas.push(newConta)
    
    this.modificarContas(contas);

    return newConta;
  }

  findById(id: number) {
    const contas = this.lerConta();
    const conta = contas.find((contas) => contas.id === id);

    if (!conta) {
      throw new Error(`Conta ${id} não encontrada`);
    }
    return conta;
  }

  findAll(): Contas[] {
    return this.lerConta();
  }

  removerConta(id: number): void {
    const contas = this.lerConta();
    const contaIndex = contas.findIndex((contas) => contas.id === id);

    contas.splice(contaIndex, 1);
    this.modificarContas(contas);
  }

  calcularSaldoTotal(): number {
    const listaDeContas = this.lerConta();

    return listaDeContas.reduce((total, conta) => total + conta.saldo, 0);
  }

  /* doSaque(valor: number) {
   this.saque.sacar(valor,this.saldo, this.atualizarSaldo);
  }

  doDeposito(valor: number) {
    this.deposito.depositar(valor, this.saldo, this.atualizarSaldo);
  } */
  
}
