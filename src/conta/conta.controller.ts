import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContaService } from './conta.service';
import { Conta } from './conta.model';


@Controller('conta')
export class ContaController {
   constructor(private readonly contaService: ContaService) {}

  @Post()
  criarConta( @Body('saldo') saldo:number, @Body('tipo') tipo:'corrente'|'poupanca', @Body('transacao')transacao: Transacao): Conta {
    return this.contaService.criarConta(saldo,tipo,transacao);
  }
  @Get()
  findAll() {
    return this.contaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contaService.findById(+id);
  }

   @Patch(':id/atualizar-saldo')
  atualizarSaldo(@Param('id') id: number, @Body("saldo") newSaldo: number) {
    return this.contaService.atualizarSaldo(+id, newSaldo);
  }

  @Delete(':id')
  removerConta(@Param('id') id: number) {
    return this.contaService.removerConta(+id);
  } 
  
}
