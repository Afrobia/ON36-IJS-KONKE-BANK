import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GerenteService } from '../service/gerente.service';
import { UserGerente } from '../model/gerente.model';
import { UserCliente } from '../model/cliente.model';
import { TipoContas } from '../model/contas.model';
import { TipoConta } from '../enum/conta.enum';

@Controller('gerente')
export class GerenteController {
    constructor(private gerenteService: GerenteService,) {};
  
  
  @Post()
  createGerente(@Body() gerente: UserGerente): UserGerente {
    return this.gerenteService.criarGerente(gerente);

  }

  @Get('')
  findAllGerentes(): UserGerente[] {
    return this.gerenteService.findAllGerentes();

  }

  @Get(':gerenteId')
  getGerenteById(@Param('gerenteId') gerenteId: string): UserGerente {
    return this.gerenteService.findById(gerenteId);

  }

  @Delete(':gerenteId')
  removerGerente(@Param('gerenteId') gerenteId: string): void {
    this.gerenteService.removerGerente(gerenteId);

  }

  // endpoints de Cliente
  @Post(':gerenteId/clients')
  addClient(@Param('gerenteId') gerenteId: string, @Body() cliente: UserCliente,): UserCliente {
    return this.gerenteService.adicionarCliente(gerenteId, cliente);

  }

  @Delete(':gerenteId/clientes/:clienteId')
  removerClient( @Param('gerenteId') gerenteId: string, @Param('clientId') clientId: string,): void {
    return this.gerenteService.removerCliente(gerenteId, clientId);

  }

  @Get(':GerenteId/clientes')
  getClientsByGerenteId(@Param('gerenteId') gerenteId: string): UserCliente[] {
    return this.gerenteService.findClienteByGerenteId(gerenteId);
  }

  // endpoints de Conta
  @Post(':gerenteId/clientes/:clienteId/contas')
  abrirConta(
    @Param('GerenteId') gerenteId: string,
    @Param('clienteId') clienteId: string,
    @Body('tipo') tipo: TipoConta,
  ): TipoContas {
    return this.gerenteService.abrirConta(gerenteId, clienteId, tipo);
  }

  @Delete(':gerenteId/contas/:contaId')
  fecharConta(@Param('gerenteId') gerenteId: string, @Param('contaId') contaId: string,
  ): void {
    return this.gerenteService.fecharConta(gerenteId, contaId);
  }

  @Post(':gerenteId/contas/:contaId/mudar-tipo')
  modificarTipoDeConta(
    @Param('gerenteId') gerenteId: string,
    @Param('contaId') contaId: string,
    @Body('novoTipo') novoTipo: TipoConta,
  ): TipoContas {
    return this.gerenteService.modificarTipoDeConta(gerenteId, contaId, novoTipo);
  }
    
}
