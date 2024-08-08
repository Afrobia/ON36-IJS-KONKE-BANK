import { Injectable } from "@nestjs/common";
import { UserCliente } from "../model/cliente.model";
import { uuid } from "uuidv4";



@Injectable()
export class ClienteRepository {
  private clientes: UserCliente[] = [];

  constructor() {}

  criarCliente(cliente: UserCliente): UserCliente {
    cliente.id = uuid();
    this.clientes.push(cliente);
    return cliente;
  }

  findAllClientes(): UserCliente[] {
    return this.clientes;

  }

  findClientesByGerenteId(gerenteId: string): UserCliente[] {
    return this.clientes.filter((cliente) => cliente.gerente.id === gerenteId);

  }

  findClienteByIdEGerenteId(clienteId: string, gerenteId: string): UserCliente | null {
    const cliente = this.clientes.find(
      (cliente) => cliente.id === clienteId && cliente.gerente.id === gerenteId,
    );

    return cliente;
  }

  findClienteByContaId(contaId: string): UserCliente | null {
    const cliente = this.clientes.find((cliente) => {
      return cliente.contas.some((conta) => conta.id === contaId);
    });

    return cliente;
  }

  getClienteById(clienteId: string): UserCliente | null {
    const cliente = this.clientes.find((cliente) => cliente.id === clienteId);

    return cliente;
  }

  removerCliente(clienteId: string): void {
    this.clientes = this.clientes.filter((cliente) => cliente.id !== clienteId);
  }
}