import { Injectable} from '@nestjs/common';
import { Cliente } from './cliente.model';
import * as path from 'path';
import * as fs from 'fs'
import { ContaService } from 'src/conta/conta.service';
import { GerenteService } from 'src/gerente/gerente.service';
import { Gerente } from 'src/gerente/gerente.model';

  
@Injectable()
export class ClienteService {
  private readonly filePathCliente = path.resolve('src/cliente/clientes.json') 
  contaBancaria: any;

  constructor(private readonly contaService: ContaService, private readonly gerenteService: GerenteService) {
    const cliente = this.lerCliente;
  }

  private lerCliente(): Cliente[] {
    const data = fs.readFileSync(this.filePathCliente, 'utf8');
    return JSON.parse(data) as Cliente[];
  }

  private modificarCliente(clientes: Cliente[]): void {
    fs.writeFileSync(this.filePathCliente, JSON.stringify(clientes, null, 2),'utf8',);
  }

  criarCliente(
    id: string,
    nome: string,
    telefone: string,
    endereco: string,
    
  ): Cliente {
    const gerente = this.gerenteService.findGerente(id);
    const clientes = this.lerCliente();
    const newCliente = {
      id,
      nome,
      telefone,
      endereco,
      gerente,
    };

    clientes.push(newCliente);
    this.modificarCliente(clientes);

    return newCliente;
  }

  findAll():Cliente[] {
    return this.lerCliente();
  }

  findById(id: string) {
    const clientes = this.lerCliente();
    const cliente = clientes.find((clientes) => clientes.id === id);

    if (!cliente) {
      throw new Error(`Cliente ${id} não encontrada`);
    }

    return cliente;
  }

  removerCliente(id: string): void { 
    const clientes = this.lerCliente();
    const clienteIndex = clientes.findIndex((clientes) => clientes.id === id);

    clientes.splice(clienteIndex, 1);
    this.modificarCliente(clientes);
  } 

  vincularConta(conta: ContaBancaria) {
    this.contaBancaria = conta;
  }

  adicionarConta(id:string, conta:ContaBancaria){
    const clientes = this.lerCliente();
    const cliente = this.findById(id)
    this.contaService.criarConta;
    
    cliente.conta.push(conta)
    this.modificarCliente(clientes)
  } 
    
  cancelarConta(id:string, conta: ContaBancaria, contaId:number){
    const clientes = this.lerCliente();
    const cliente = this.findById(id)
    this.contaService.findById(contaId)
    

    cliente.conta.splice(conta.contaId)
    this.contaService.removerConta(contaId)
    this.modificarCliente(clientes)
  }
    
}

