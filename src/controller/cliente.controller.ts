import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';
import { TClientes} from '../model/cliente.model';
import { TipoCliente } from '../enum/cliente.enum';
import { User } from '../model/user.model';
import { UserGerente } from '../model/gerente.model';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post()
  criarCliente(@Param('gerente') gerente: UserGerente,@Body('tipoCliente') tipo: TipoCliente, @Body() usuario: User): TClientes {
    return this.clienteService.criarCliente(tipo, usuario, gerente);
  }

  @Get()
  findAllClientes(): TClientes[] {
    return this.clienteService.findAllClientes();
  }

  @Get('id')
  findClienteById(clienteId: string): TClientes {
    return this.clienteService.findClienteById(clienteId);
  }

  @Delete('id')
  removerCliente(clienteId: string): void {
    return this.clienteService.removerCliente(clienteId);
  }
}
