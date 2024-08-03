import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GerenteService } from './gerente.service';

@Controller('gerente')
export class GerenteController {
    constructor(private gerenteService: GerenteService,) {};

    @Post()
    criarGerente(@Body('nome') nome:string, @Body('telefone') telefone: string, @Body('endereco') endereco: string) {
      return this.gerenteService.criarGerente(nome, endereco, telefone);
    }
  
    @Get()
    findAll() {
      return this.gerenteService.findAll();
    }
  
    @Get(':id')
    findById(@Param('id') id: string) {
      return this.gerenteService.findById(id);
    }

    @Delete()
    removergerente(@Param('id') id:string) {
        return this.gerenteService.removerGerente(id)
    }
    
}
