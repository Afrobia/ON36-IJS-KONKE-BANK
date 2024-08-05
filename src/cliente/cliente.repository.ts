import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { UserCliente } from "./userCliente.model";


@Injectable()
export class ClientRepository {
  private clientes: UserCliente[] = [];

  constructor() {}

  findAllClientes(): UserCliente[] {
    return this.clientes;

  }

  findClientesByGerenteId(gerenteId: string): UserCliente[] {
    return this.clientes.filter((cliente) => cliente.gerente.id === gerenteId);

  }

  findClienteIdeGerenteId(clienteId: string, gerenteId: string): UserCliente | null {
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

  getClientById(clienteId: string): UserCliente | null {
    const cliente = this.clientes.find((cliente) => cliente.id === clienteId);

    return cliente;
  }

  criarCliente(cliente: UserCliente): UserCliente {
    cliente.id = randomUUID();
    this.clientes.push(cliente);
    return cliente;
  }

  removerClient(clienteId: string): void {
    this.clientes = this.clientes.filter((cliente) => cliente.id !== clienteId);
  }
}