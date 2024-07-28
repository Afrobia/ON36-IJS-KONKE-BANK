import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';



@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  criarCliente(@Body('id') id:string, @Body('nome') nome:string, @Body('telefone') telefone: string, @Body('endereco') endereco: string) {
    return this.clienteService.criarCliente(id, nome, telefone, endereco);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.clienteService.findById(id);
  }
  
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
