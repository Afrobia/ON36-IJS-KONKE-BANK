import { UserCliente } from 'src/cliente/userCliente.model';
import { User } from 'src/user/model/user.interface';


export class UserGerente implements User{
  id: string;
  nome: string;
  clientes: UserCliente[]
  
  

  constructor(nome:string) {
    this.nome = nome;
    this.clientes = []
  }
  
  listaIdCliente: string[] = [];
  
}
