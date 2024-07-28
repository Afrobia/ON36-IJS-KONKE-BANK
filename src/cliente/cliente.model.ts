import { Gerente } from "src/gerente/gerente.model";
import { Usuario } from "src/usuario/usuario.model";

export class Cliente extends Usuario{
  
  conta?:ContaBancaria[]

  constructor(
    id:string,
    nome:string,
    telefone: string,
    endereco: string,
    gerente: Gerente,
  ) {
    super(id,nome);
  }

}

