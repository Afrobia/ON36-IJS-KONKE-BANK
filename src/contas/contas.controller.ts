import { Body, Controller, Post } from '@nestjs/common';
import { ContasService } from './contas.service';
import { TipoContas } from './model/contas.model';
import { ClienteService } from 'src/cliente/cliente.service';


@Controller('contas')
export class ContasController {
  constructor(private readonly contaService: ContasService, private clienteService: ClienteService) {}

  @Post()
  criarConta(@Body('tipo') tipo: TipoConta, @Body('clienteId') clienteId:string): TipoContas {
    const cliente = this.clienteService.findById(clienteId)
    return this.contaService.criarConta(tipo, cliente);
  }

}
