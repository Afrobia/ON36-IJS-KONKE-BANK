import { randomUUID } from 'crypto';
import { Contas } from 'src/contas/model/contas.model';
import { UserGerente } from 'src/gerente/userGerente.model';
import { User } from 'src/user/model/user.interface';


export class UserCliente implements User {

  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  gerente?: UserGerente;
  contas?: Contas[];
  
  constructor(nome:string, endereco: string, telefone: string) {
    this.id = randomUUID()
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.contas = []
    this.gerente = null
  }

}
