import { Injectable, NotFoundException } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ClienteService } from './cliente.service';
import { UserGerente } from '../model/gerente.model';
import { GerenteRepository } from '../repository/gerente.repository';
import { TClientes } from '../model/cliente.model';
import { TipoContas } from '../model/contas.model';
import { TipoConta } from '../enum/conta.enum';

@Injectable()
export class GerenteService {
  constructor(
    private gerenteRepository: GerenteRepository,
    private clienteService: ClienteService,
    private contasService: ContasService,
  ) {}

  criarGerente(gerente: UserGerente): UserGerente {
    return this.gerenteRepository.criarGerente(gerente);
  }

  findAllGerentes(): UserGerente[] {
    return this.gerenteRepository.getAllGerentes();
  }

  findById(gerenteId: string) {
    const gerente = this.gerenteRepository.findGerenteById(gerenteId);

    if (!gerente) {
      throw new NotFoundException({ gerente: 'Gerente não encontrado' });
    }

    return gerente;
  }

  removerGerente(gerenteId: string): void {
    this.gerenteRepository.removerGerente(gerenteId);
  }

  findClienteByGerenteId(gerenteId: string): TClientes[] {
    return this.clienteService.findClienteByGerenteId(gerenteId);
  }

  /* clienteTemGerente(contaId: string, gerenteId: string): boolean {
    const cliente = this.clienteService.findClienteByConta(contaId);
    const gerente = this.findById(gerenteId);

    if (cliente.gerente.id !== gerente.id) {
      throw new Error('Cliente não está vinculado ao gerente');
    }

    return true;
  }

  removerCliente(gerenteId: string, clienteId: string): void {
    const cliente = this.clienteService.findClientebyIdeGerenteId(
      clienteId,
      gerenteId,
    );
    this.clienteService.removerCliente(cliente.id);
  }

  abrirConta(
    gerenteId: string,
    clienteId: string,
    tipo: TipoConta,
  ): TipoContas {
    const cliente = this.clienteService.findClienteById(clienteId);
    const gerente = this.gerenteRepository.findGerenteById(gerenteId);
    cliente.gerente.id = gerente.id;

    return this.contasService.criarConta(tipo, cliente);
  }

  fecharConta(gerenteId: string, contaId: string): void {
    if (!this.clienteTemGerente(contaId, gerenteId)) {
      throw new Error('Cliente não vinculado ao gerente');
    }

    this.contasService.removerConta(contaId);
  }

  modificarTipoDeConta(
    gerenteId: string,
    contaId: string,
    novoTipo: TipoConta,
  ): TipoContas {
    if (!this.clienteTemGerente(contaId, gerenteId)) {
      throw new Error('Cliente não vinculado ao gerente');
    }

    return this.contasService.modificarTipoDeConta(contaId, novoTipo);
  } */
}
