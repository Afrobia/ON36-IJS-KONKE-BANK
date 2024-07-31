import { randomUUID } from 'crypto';
import { User } from './user.model';
import { UserGerente } from './userGerente.model';
import { Contas } from 'src/contas/model/contas.model';
import { ContasService } from 'src/contas/contas.service';
import { UserService } from '../user.service';

export class UserCliente implements User {

  tipo = TipoUser.CLIENTE;
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  gerente: UserGerente
  contas: Contas[] = []
  
  constructor(nome:string, endereco: string, telefone: string) {
    this.id = randomUUID()
  }

  private contaService: ContasService;
  private clienteService: UserService

  encontrarConta(id:string): Contas {
   return this.contaService.findByCliente(id)
  }
  
  adicionarConta(id:string) {
    this.clienteService.findById(id)
    const conta = this.encontrarConta(id)

    this.contas.push(conta);    
    
  }

}
