import { Body, Controller, Delete, Get, Post, UseInterceptors } from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';
import { TClientes} from '../model/cliente.model';
import { TipoCliente } from '../enum/cliente.enum';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { CepValidationInterceptor } from '../cep/cep-validator.interceptor';

@Controller('cliente')
@UseInterceptors(CepValidationInterceptor)
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post()
  criarCliente(@Body('tipoCliente') tipo: TipoCliente, @Body() cliente: CreateClienteDto):TClientes {
    return this.clienteService.criarCliente(tipo, cliente);
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
