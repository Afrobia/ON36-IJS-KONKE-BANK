import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TipoContas } from '../../domain/model/contas.entity';
import { TipoConta } from '../../../enum/conta.enum';
import { TUser} from '../../../user/domain/model/user.entity';
import { ContasService } from 'src/contas/aplication/contas.service';


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
