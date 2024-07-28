import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';



@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  
  @Patch('id/conta')
  adicionarConta(@Param('id')id:string, @Param('conta')conta: ContaBancaria) {
    return this.clienteService.adicionarConta(id,conta)
  }
  
  @Patch('id/conta')
  cancelarConta(@Param('id')id:string, @Param('conta')conta: ContaBancaria, @Param('contaId')contaId: number) {
    return this.clienteService.cancelarConta(id,conta,contaId)
  }

  @Delete(':id')
  removerCliente(@Param('id') id: string) {
    return this.clienteService.removerCliente(id);
  }  
}
