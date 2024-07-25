import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContaService } from './conta.service';
import { Conta } from './conta.model';
import { TipoConta } from './tipoConta.enum';

@Controller('conta')
export class ContaController {
  /* constructor(private readonly contaService: ContaService) {}

  @Post()
  criarConta(@Body('nomeCliente') nomeCliente: string, @Body('saldo') saldo:number): Conta {
    return this.contaService.criarConta(nomeCliente, saldo);
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
  } */
}
