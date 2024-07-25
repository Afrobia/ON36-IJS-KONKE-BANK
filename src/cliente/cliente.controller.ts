import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';


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

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  } */

  @Delete(':id')
  removerCliente(@Param('id') id: string) {
    return this.clienteService.removerCliente(id);
  }  
}
