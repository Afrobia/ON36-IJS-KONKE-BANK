import { randomUUID } from 'crypto';
import { UserGerente } from './userGerente.model';
import { User } from './user.model';

export class UserCliente implements User {
  tipo = TipoUser.cliente;
  nome: string;
  endereco: string;
  telefone: string;
  id: string;
  
  constructor() {
    this.id = randomUUID()
  }
}
