import { Injectable } from '@nestjs/common';
import { UserCliente } from '../model/cliente.model';
import { ClienteRepository } from '../repository/cliente.repository';
@Injectable()
export class ClienteService {
  public clientes: UserCliente[] = [];

  constructor(private clienteRepository: ClienteRepository) {}

  criarCliente(cliente: UserCliente): UserCliente {
    return this.clienteRepository.criarCliente(cliente);
  }

  findAllClientes(): UserCliente[] {
    return this.clienteRepository.findAllClientes();
  }

  findClienteById(clienteId: string): UserCliente {
    return this.clienteRepository.getClienteById(clienteId);
  }

  findClienteByConta(contaId: string): UserCliente {
    return this.clienteRepository.findClienteByContaId(contaId);
  }

  findClienteByGerenteId(gerenteId: string): UserCliente[] | null {
    return this.clienteRepository.findClientesByGerenteId(gerenteId);
  }

  findClientebyIdeGerenteId(clienteId:string, gerenteId: string): UserCliente| null {
    return this.clienteRepository.findClienteByIdEGerenteId(clienteId,gerenteId)
  }

  removerCliente(clienteId: string): void {
    this.clienteRepository.removerCliente(clienteId);
  }
  
}
