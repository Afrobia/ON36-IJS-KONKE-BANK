import { randomUUID } from 'crypto';
import { Contas } from 'src/contas/model/contas.interface';
import { User } from 'src/user/model/user.model';


export class UserCliente implements User {

  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  gerente: string;
  contas: Object[];
  
  constructor(nome:string, endereco: string, telefone: string, gerente:string) {
    this.id = randomUUID()
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.gerente = gerente
  }

}
