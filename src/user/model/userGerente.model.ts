import { randomUUID } from 'crypto';
import { User } from './user.model';

export class UserGerente implements User {
  tipo = TipoUser.GERENTE;
  nome: string;
  endereco: string;
  telefone: string;
  id: string;
  listaCliente: User[] = []

  constructor(nome:string, endereco: string, telefone: string) {
    this.id = randomUUID();
  }
}
