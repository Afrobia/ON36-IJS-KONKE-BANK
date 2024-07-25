import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { Cliente } from 'src/cliente/cliente.model';

@Controller('gerente')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  
  @Post()
  criarGerente(@Body('id') id:string, @Body('nome') nome:string, @Body('clientes') clientes: Cliente[]) {
    return this.gerenteService.criarGerente(id, nome, clientes);
  }


  @Get(':id')
  findGerente(@Param('id') id: string) {
    return this.gerenteService.findGerente(id);
  }

}
