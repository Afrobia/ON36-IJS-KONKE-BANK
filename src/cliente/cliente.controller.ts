import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';


@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  criarCliente(@Body('nome') nome:string, @Body('telefone') telefone: string, @Body('endereco') endereco: string) {
    return this.clienteService.criarCliente(nome, telefone, endereco);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':clienteId')
  findById(@Param('clienteId') clienteId: number) {
    return this.clienteService.findById(+clienteId);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  } */ 
}
