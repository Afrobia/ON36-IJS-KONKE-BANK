import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ContasService } from '../service/contas.service';
import { TipoContas } from '../model/contas.model';
import { TipoConta } from '../enum/conta.enum';
import { UserCliente } from '../model/cliente.model';


@Controller('contas')
export class ContasController {
  constructor(private readonly contaService: ContasService) {}

  @Post()
  criarConta(@Body('tipo') tipo: TipoConta, @Body('clienteId') cliente: UserCliente): TipoContas {
    return this.contaService.criarConta(tipo, cliente);
  }

  @Get('conta-list')
  filterTContas(@Param('tipo') tipo: TipoConta): TipoContas[]{
    return this.contaService.filterTConta(tipo)
  }

  @Delete('id')
  removerConta(contaId:string){
    return this.contaService.removerConta(contaId)
  }
  

}
