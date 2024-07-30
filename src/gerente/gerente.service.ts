import { Injectable, NotFoundException } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Gerente } from './gerente.model';
import { Cliente } from 'src/cliente/cliente.model';
import { ClienteService } from 'src/cliente/cliente.service';


@Injectable()
export class GerenteService {
  private readonly filePath = path.resolve('src/gerente/gerentes.json');

  constructor(private readonly clienteService: ClienteService){}

  private lerGerente(): Gerente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Gerente[];
  }

  private modificarGerente(gerentes: Gerente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(gerentes, null, 2), 'utf8');
  }

  criarGerente(id: string, nome: string, listaClientes: Cliente[]): Gerente {
    const gerentes = this.lerGerente();
    const newGerente = {
      id,
      nome,
      listaClientes: [],
    };
    gerentes.push(newGerente);
    this.modificarGerente(gerentes);
    return newGerente;
  }

  findGerente(gerenteId: string) {
    const gerentes = this.lerGerente();
    const gerente = gerentes.find((gerentes) => gerentes.id === gerenteId);

    if (!gerente) {
      throw new Error(`Cliente ${gerenteId} não encontrada`);
    }
    
    return gerente;
  }
  
  adicionarListaClientes(id:string,gerenteId:string) {
    const gerentes = this.lerGerente();
    const gerente = this.findGerente(gerenteId)
    const cliente = this.clienteService.findById(id);
    
    gerente.listaClientes.push(cliente)
    this.modificarGerente(gerentes)
  }
 
}
