import { randomUUID } from 'crypto';
import { User } from './user.model';
import { UserGerente } from './userGerente.model';

export class UserCliente implements User {

  tipo = TipoUser.CLIENTE;
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  gerente: UserGerente
  
  constructor(nome:string, endereco: string, telefone: string) {
    this.id = randomUUID()
  }
}
