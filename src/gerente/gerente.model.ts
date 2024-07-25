import { Cliente } from "src/cliente/cliente.model";
import { Usuario } from "src/usuario/usuario.model";

export class Gerente extends Usuario{
    id:string
    nome: string
    clientes: Cliente[]
    constructor(id:string, nome: string, clientes: Cliente[]){
        super(id, nome);
    }
}
