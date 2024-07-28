import { Cliente } from "src/cliente/cliente.model";
import { Usuario } from "src/usuario/usuario.model";

export class Gerente extends Usuario{
    listaClientes: Cliente[]
    constructor(gerenteId:string, nome: string, listaClientes: Cliente[]){
        super(gerenteId, nome);
    }
}
