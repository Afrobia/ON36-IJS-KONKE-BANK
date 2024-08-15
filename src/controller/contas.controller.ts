import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ContasService } from '../service/contas.service';
import { TipoContas } from '../model/contas.entity';
import { TipoConta } from '../enum/conta.enum';
import { TUser} from '../model/user.entity';


@Controller('contas')
export class ContasController {
  constructor(private readonly contaService: ContasService) {}

  @Post()
  criarConta(@Body('tipo') tipo: TipoConta, @Body('cliente') cliente: TUser): TipoContas {
    return this.contaService.criarConta(tipo, cliente);
  }

  @Get('conta-list')
  filterTContas(@Param('tipo') tipo: TipoConta): TipoContas[]{
    return this.contaService.filterTConta(tipo)
  }

  @Patch('saque')
  doSaque(@Param('contaId') contaId: string, @Body('valor')valor:number):void {
    this.contaService.doSaque(contaId, valor)
  }
  
  @Patch('deposito')
  doDeposito(@Param('contaId') contaId: string, @Body('valor')valor:number):void {
    this.contaService.doDeposito(contaId, valor)
  }

  @Delete('id')
  removerConta(contaId:string){
    return this.contaService.removerConta(contaId)
  }

}
