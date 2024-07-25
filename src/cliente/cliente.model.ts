import { Conta } from "src/conta/conta.model";
import { Gerente } from "src/gerente/gerente.model";
import { Usuario } from "src/usuario/usuario.model";

export class Cliente extends Usuario{
    
  constructor(
    id:string,
    nome:string,
    telefone: string,
    endereco: string,
  ) {
    super(id,nome);
  }

}

