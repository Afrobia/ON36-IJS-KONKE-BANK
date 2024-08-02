import { randomUUID } from 'crypto';
import { User } from 'src/user/model/user.model';


export class UserGerente implements User {

  nome: string;
  endereco: string;
  telefone: string;
  id: string;
  

  constructor(nome:string, endereco: string, telefone: string) {
    this.id = randomUUID();
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone 
  }
  
  listaIdCliente: string[] = [];
  
}
