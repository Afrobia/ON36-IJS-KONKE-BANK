import { UserCliente } from "./cliente.model";


export class UserGerente{
  id: string;
  nome: string;
  clientes: UserCliente[]
  
  constructor(nome:string) {
    this.nome = nome;
    this.clientes = []
  }
    
}
