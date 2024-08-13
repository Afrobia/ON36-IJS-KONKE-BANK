import { Injectable } from '@nestjs/common';
import { TClientes } from '../model/cliente.model';
import { ClienteRepository } from '../repository/cliente.repository';
import { TipoCliente } from '../enum/cliente.enum';
import { ClienteFactory } from '../factory/userCliente.factory';
import { User } from '../model/user.model';
import { UserGerente } from '../model/gerente.model';
@Injectable()
export class ClienteService {
  constructor(
    readonly clienteFactory: ClienteFactory,
    readonly clienteRepository: ClienteRepository,
  ) {}

  criarCliente(
    tipo: TipoCliente,
    usuario: User,
    gerente: UserGerente,
  ): TClientes {
    const cliente = this.clienteFactory.criarCliente(tipo, usuario, gerente);
    return this.clienteRepository.criarCliente(cliente);
  }

  findAllClientes(): TClientes[] {
    return this.clienteRepository.findAllClientes();
  }

  findClienteById(clienteId: string): TClientes {
    return this.clienteRepository.getClienteById(clienteId);
  }

  findClienteByConta(contaId: string): TClientes {
    return this.clienteRepository.findClienteByContaId(contaId);
  }

  findClienteByGerenteId(gerenteId: string): TClientes[] | null {
    return this.clienteRepository.findClientesByGerenteId(gerenteId);
  }

  findClientebyIdeGerenteId(
    clienteId: string,
    gerenteId: string,
  ): TClientes | null {
    return this.clienteRepository.findClienteByIdEGerenteId(
      clienteId,
      gerenteId,
    );
  }

  removerCliente(clienteId: string): void {
    this.clienteRepository.removerCliente(clienteId);
  }
}
