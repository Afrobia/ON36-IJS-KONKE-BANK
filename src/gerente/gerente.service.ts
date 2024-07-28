import { Injectable, NotFoundException } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Gerente } from './gerente.model';
import { Cliente } from 'src/cliente/cliente.model';
import { ClienteService } from 'src/cliente/cliente.service';


@Injectable()
export class GerenteService {
  private readonly filePath = path.resolve('src/gerente/gerentes.json');


  private lerGerente(): Gerente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Gerente[];
  }

  private modificarGerente(gerentes: Gerente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(gerentes, null, 2), 'utf8');
  }

  validarGerente = (id:string) =>{
    const gerentes = this.lerGerente()
    const gerente = gerentes.find((gerentes) => gerentes.id === id);

    if (!gerente) {
      throw new Error(`Gerente ${id} não encontrado`);
    };
  }

  
  criarGerente(id: string, nome: string, listaClientes: Cliente[]): Gerente {
    const gerentes = this.lerGerente();
    const newGerente = {
      id,
      nome,
      listaClientes,
    };
    gerentes.push(newGerente);
    this.modificarGerente(gerentes);
    return newGerente;
  }


  findGerente(id: string) {
    const gerentes = this.lerGerente();
    const gerente = gerentes.find((gerentes) => gerentes.id === id);

    if (!gerente) {
      throw new Error(`Cliente ${id} não encontrada`);
    }
    
    return gerente;
  }
  
 }

  /* 
  } */

