import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService) {};

    @Post()
    criarCliente(@Body('nome') nome:string, @Body('telefone') telefone: string, @Body('endereco') endereco: string,@Body('gerente') gerente:string) {
      return this.clienteService.criarCliente(nome, endereco, telefone, gerente);
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
    removerCliente(@Param('id') id:string) {
        return this.clienteService.removerCliente(id)
    }
}
