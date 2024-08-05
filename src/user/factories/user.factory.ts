import { UserCliente } from "src/cliente/userCliente.model";
import { UserGerente } from "src/gerente/userGerente.model";


export class UserFactory {

    criarUser(nome:string, tipo:TipoUser, endereco: string, telefone: string,gerente:string) {
        switch(tipo) {
            case TipoUser.CLIENTE:
                return new UserCliente(nome,endereco,telefone)
            case TipoUser.GERENTE:
                return new UserGerente(nome)
        }
    }
}