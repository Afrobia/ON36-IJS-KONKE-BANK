import { randomUUID } from 'crypto';
import { User } from './user.model';

export class UserGerente implements User {
  tipo = TipoUser.cliente;
  nome: string;
  endereco: string;
  telefone: string;
  id: string;

  constructor() {
    this.id = randomUUID();
  }
}
