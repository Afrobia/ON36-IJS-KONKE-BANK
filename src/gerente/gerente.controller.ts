import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { Cliente } from 'src/cliente/cliente.model';
import { ClienteService } from 'src/cliente/cliente.service';
import { ContaService } from 'src/conta/conta.service';

@Controller('gerente')
export class GerenteController {
  constructor(
    private readonly gerenteService: GerenteService, 
    private readonly clienteService: ClienteService,
    private readonly contaService: ContaService
  ) {}

  
  @Post()
  criarGerente(@Body('id') id:string, @Body('nome') nome:string, @Body('clientes') clientes: Cliente[]) {
    return this.gerenteService.criarGerente(id, nome, clientes);
  }
  
  @Get(':id')
  findGerente(@Param('id') id: string) {
    return this.gerenteService.findGerente(id);
  }

//Endpoints de cliente 

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
  
// Endpoints de conta

}
