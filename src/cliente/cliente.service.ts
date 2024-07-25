import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente.model';
import * as path from 'path';
import * as fs from 'fs'



@Injectable()
export class ClienteService {
  
  private readonly filePathCliente = path.resolve('src/cliente/clientes.json') 

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
    const clientes = this.lerCliente();
    const newCliente = {
      id,
      nome,
      telefone,
      endereco,
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
  
}

