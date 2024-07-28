import { Cliente } from "src/cliente/cliente.model";
import { Usuario } from "src/usuario/usuario.model";

export class Gerente extends Usuario{
    id:string
    nome: string
    listaClientes: Cliente[]
    constructor(id:string, nome: string, listaClientes: Cliente[]){
        super(id, nome);
    }
}
