import { Injectable } from '@nestjs/common';
import { TClientes } from '../model/cliente.model';
import { ClienteRepository } from '../repository/cliente.repository';
import { TipoCliente } from '../enum/cliente.enum';
import { ClienteFactory } from '../factory/cliente.factory';
import { CreateClienteDto } from '../dto/create-cliente.dto';


@Injectable()
export class ClienteService {
  constructor(
    readonly clienteFactory: ClienteFactory,
    readonly clienteRepository: ClienteRepository,
   
  ) {}

  criarCliente(
    tipo: TipoCliente,
    createClienteDto: CreateClienteDto,
  ): TClientes {
    const cliente = this.clienteFactory.criarCliente(tipo, createClienteDto);
   
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

  findClientebyCadastroUnico(
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
