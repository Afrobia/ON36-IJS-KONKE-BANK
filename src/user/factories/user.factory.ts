import { User } from "../model/user.model";
import { UserCliente } from "../model/userCliente.model";
import { UserGerente } from "../model/userGerente.model";

export abstract class UserFactory {

    criarUser(nome:string, tipo:TipoUser, endereco: string, telefone: string) {
        switch(tipo) {
            case TipoUser.CLIENTE:
                return new UserCliente(nome,endereco,telefone)
            case TipoUser.GERENTE:
                return new UserGerente(nome,endereco,telefone)
        }
    }
}