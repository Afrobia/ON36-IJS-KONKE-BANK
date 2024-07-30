import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ContasService } from './contas.service';
import { Contas } from './model/contas.model';

@Controller('contas')
export class ContasController {
    constructor(private readonly contaService: ContasService) {}

  @Post()
  criarConta( @Body('saldo') saldo:number, @Body('tipo') tipo: TipoConta): Contas {
    return this.contaService.criarConta(saldo,tipo);
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
