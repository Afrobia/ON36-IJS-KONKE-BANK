import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService) {};

    @Post()
    criarCliente(@Body('nome') nome:string, @Body('telefone') telefone: string, @Body('endereco') endereco: string) {
      return this.clienteService.criarCliente(nome, endereco, telefone);
    }
  
    @Get()
    findAll() {
      return this.clienteService.findAll();
    }
  
    @Get(':id')
    findById(@Param('id') id: string) {
      return this.clienteService.findById(id);
    }

    @Delete()
    removergerente(@Param('id') id:string) {
        return this.clienteService.removerCliente(id)
    }
}
