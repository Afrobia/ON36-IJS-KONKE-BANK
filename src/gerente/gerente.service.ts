import { Injectable, NotFoundException } from "@nestjs/common";
import { ContasService } from "src/contas/contas.service";
import { ClienteService } from "src/cliente/cliente.service";
import { UserGerente } from "./userGerente.model";
import { GerenteRepository } from "./gerente.repository";
import { UserCliente } from "src/cliente/userCliente.model";

@Injectable()
export class GerenteService {
  
  constructor(
    private gerenteRepository: GerenteRepository, 
    private clienteService : ClienteService,
    private contasService: ContasService) {}

  
  criarGerente(gerente: UserGerente): UserGerente {
    return this.gerenteRepository.createGerente(gerente)
  }

  findAllGerentes(): UserGerente[] {
    return this.gerenteRepository.getAllGerentes()
  }

  findById(gerenteId: string) {
    const gerente = this.gerenteRepository.findGerenteById(gerenteId)

    if(!gerente) {
      throw new NotFoundException({gerente: 'Gerente não encontrado'})
    }

    return gerente
  }

  removerGerente(gerenteId: string): void {
    this.gerenteRepository.removeGerente(gerenteId)

  }

  findClienteByGerenteId(gerenteId: string): UserCliente[] {
    return this.clienteService.findClienteByGerenteId(gerenteId)
  }
  

  adicionarCliente(gerenteId:string, cliente: UserCliente): UserCliente {
    const gerente = this.gerenteRepository.findGerenteById(gerenteId);
    cliente.gerente = gerente;
    return this.clienteService.criarCliente(cliente)
    
  }

  clienteTemGerente(contaId:number, gerenteId: string): boolean {
    const cliente = this.clienteService.findClienteByContaId(accountId);
    const gerente = this.findById(gerenteId);

    if(cliente.gerente.id !== gerente.id) {
      throw new Error ('Cliente não está vinculado ao gerente')
    }

    return true
  }

  removerCliente(gerenteId:string, clienteId: string): void {
    const cliente = this.clienteService.findClienteIdeGerenteId(clienteId, gerenteId)
    this.clienteService.removerCliente(cliente.id)

  }

  abrirConta(gerenteId:string, clienteId:string, tipo: TipoConta) {
    const cliente = this.clienteService.findById(clienteId)
    const gerente = this.gerenteRepository.findGerenteById(gerenteId)

    cliente.gerente = gerente;

    return this.contasService.criarConta(tipo, cliente)

  }

  fecharConta(gerenteId: string, contaId:number): void {
    if(!this.clienteTemGerente(contaId,gerenteId)) {
      throw new Error ('Cliente não vinculado ao gerente')
    }

    this.contasService.removerConta(contaId)
  }

  modificarTipoDeConta(gerenteId:string, contaId:number, tipo: TipoConta) {

    if(!this.clienteTemGerente(contaId, gerenteId)) {
      throw new Error ('Cliente não vinculado ao gerente')
    }

    return this.contasService.mudarTipoDeConta(contaId, tipo)
  }


}
