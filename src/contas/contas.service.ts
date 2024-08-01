import { Injectable, NotFoundException } from '@nestjs/common';
import { Contas } from './model/contas.model';
import * as path from 'path';
import * as fs from 'fs';
import { UserService } from 'src/user/user.service';
import { ContasFactory } from './factories/contas.factory';
import { Saque } from 'src/metodoTransacao/saque/saque.interface';
import { Deposito } from 'src/metodoTransacao/deposito/deposito.interface';


@Injectable()
export class ContasService {
  private readonly filePath = path.resolve('src/conta/contas.json');
  private saque: Saque;
  private deposito: Deposito;

  constructor(
    private readonly userService: UserService,
    private readonly contasFactory: ContasFactory,
    private saldo: number 
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

  criarConta(clienteId: string, saldo: number, tipo: TipoConta,saque:Saque, deposito:Deposito) {
    const contas = this.lerConta();
    const cliente = this.userService.findById(clienteId);
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrada');
    }

    const newConta = this.contasFactory.criarConta(cliente.id, saldo, tipo, saque, deposito);
    contas.push(newConta);
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

  findByCliente(clienteId: string) {
    const contas = this.lerConta();
    const conta = contas.find((contas) => contas.clienteId === clienteId);

    if (!conta) {
      throw new Error(`Conta ${clienteId} não encontrada`);
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

  atualizarSaldo() {
    return this.saldo
  }

  doSaque(valor: number) {
   this.saque.sacar(valor,this.saldo, this.atualizarSaldo);
  }
  doDeposito(valor: number) {
    this.deposito.depositar(valor, this.saldo, this.atualizarSaldo);
  }
  
}
