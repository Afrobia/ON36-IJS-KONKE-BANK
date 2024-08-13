import { Injectable } from "@nestjs/common";
import { TClientes, UserCliente} from "../model/cliente.model";
import { uuid } from "uuidv4";

@Injectable()
export class ClienteRepository {
  private clientes: TClientes[] = [];

  constructor() {}

  criarCliente(cliente: TClientes): TClientes {
    cliente.id = uuid();
    this.clientes.push(cliente);
    return cliente;
  }

  findAllClientes(): TClientes[] {
    return this.clientes;

  }

  findClientesByGerenteId(gerenteId: string): TClientes[] {
    return this.clientes.filter((cliente) => cliente.gerenteId === gerenteId);

  }

  findClienteByIdEGerenteId(clienteId: string, gerenteId: string): TClientes | null {
    const cliente = this.clientes.find(
      (cliente) => cliente.id === clienteId && cliente.gerenteId === gerenteId,
    );

    return cliente;
  }

  findClienteByContaId(contaId: string): TClientes | null {
    const cliente = this.clientes.find((cliente) => {
      return cliente.contas.some((conta) => conta.id === contaId);
    });

    return cliente;
  }

  getClienteById(clienteId: string): TClientes | null {
    const cliente = this.clientes.find((cliente) => cliente.id === clienteId);

    return cliente;
  }

  removerCliente(clienteId: string): void {
    this.clientes = this.clientes.filter((cliente) => cliente.id !== clienteId);
  }
}