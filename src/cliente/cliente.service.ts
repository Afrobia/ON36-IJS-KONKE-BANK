import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente.model';
import * as path from 'path';
import * as fs from 'fs'


@Injectable()
export class ClienteService {
  private readonly filePath = path.resolve('src/cliente/clientes.json') 

  private lerCliente(): Cliente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Cliente[]
  }

  private modificarCliente(clientes: Cliente[]): void{
    fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), 'utf8')
  }

  criarCliente(nome: string, telefone: string, endereco: string):Cliente {
  const clientes = this.lerCliente();
  const newCliente = {
    clienteId: clientes.length> 0? clientes[clientes.length - 1].clienteId + 1 : 1 ,
    nome,
    telefone,
    endereco
  };
  clientes.push(newCliente)
  this.modificarCliente(clientes)
  return newCliente
  }

  findAll() {
    return `This action returns all cliente`;
  }
 
  findById(clienteId: number) {
    const clientes = this.lerCliente();
    const cliente = clientes.find(clientes => clientes.clienteId === clienteId);

    if(!cliente){
      throw new Error(`Cliente ${clienteId} não encontrada`);
    };

    return cliente;
  }
}
