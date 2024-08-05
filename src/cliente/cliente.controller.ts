import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { UserCliente } from './userCliente.model';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService) {};

    
  @Post()
    createClient(@Body() cliente: UserCliente): UserCliente {
      return this.clienteService.criarCliente(cliente);
    }
    
  @Get()
    getAllClients(): UserCliente[] {
      return this.clienteService.findAllClientes();
    }
    
  @Get()
    getClientById(clienteId: string): UserCliente {
      return this.clienteService.findClienteById(clienteId);
    }
}
