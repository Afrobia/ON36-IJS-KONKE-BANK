import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { Transacao } from './model/transacao.model';

@Controller('transacao')
export class TransacaoController {
  constructor(private readonly transacoesService: TransacaoService) {}

  @Post()
  registrarTransacao(
    @Body('accountId') accountId: number,
    @Body('valor') valor: number,
    @Body('tipo') tipo: TipoTransacao,
  ): Transacao {
    return this.transacoesService.registrarTransacao(accountId, valor, tipo);
  }

  @Get()
  findAll(): Transacao[] {
    return this.transacoesService.findAll();
  }

  @Put(':id')
  updateTransacao(
    @Param('id', ParseIntPipe) id: number,
    @Body('accountId', ParseIntPipe) accountId: number,
    @Body('valor', ParseFloatPipe) valor: number,
    @Body('tipo') tipo: TipoTransacao,
    @Body('date') data: Date,
  ): Transacao {
    const newTransacao = new Transacao(id, accountId, valor, tipo, data);
    return this.transacoesService.updateTransacao(newTransacao);
  }

  @Delete(':id')
  cancelarTransacao(@Param('id', ParseIntPipe) id: number): void {
    return this.transacoesService.cancelarTransacao(id);
  }
}
