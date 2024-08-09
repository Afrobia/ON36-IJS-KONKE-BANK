import { Contas } from '../model/contas.model';
import { UserGerente } from './gerente.model';



export class UserCliente {

  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  gerente?: UserGerente;
  contas?: Contas[];
  
  constructor(nome:string, endereco: string, telefone: string) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.contas = []
    this.gerente = null
  }

}

