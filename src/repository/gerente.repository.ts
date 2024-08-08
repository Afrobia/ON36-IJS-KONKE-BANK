import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UserGerente } from '../model/gerente.model';
import { uuid } from 'uuidv4';

@Injectable()
export class GerenteRepository {
  private gerentes: UserGerente[] = [];

  constructor() {}

  getAllGerentes(): UserGerente[] {
    return this.gerentes;
  }

  criarGerente(gerente: UserGerente): UserGerente {
    gerente.id = uuid();
    this.gerentes.push(gerente);
    return gerente;
  }

  findGerenteById(gerenteId: string): UserGerente | null {
    const gerente = this.gerentes.find((gerente) => gerente.id === gerenteId);
    return gerente;
  }

  removerGerente(gerenteId: string): void {
    this.gerentes = this.gerentes.filter((gerente) => gerente.id !== gerenteId);
  }
}