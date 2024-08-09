import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';
import { UserCliente } from '../model/cliente.model';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post()
  criarCliente(@Body() cliente: UserCliente): UserCliente {
    return this.clienteService.criarCliente(cliente);
  }

  @Get()
  findAllClientes(): UserCliente[] {
    return this.clienteService.findAllClientes();
  }

  @Get('id')
  findClienteById(clienteId: string): UserCliente {
    return this.clienteService.findClienteById(clienteId);
  }

  @Delete('id')
  removerCliente(clienteId: string): void {
    return this.clienteService.removerCliente(clienteId);
  }
}