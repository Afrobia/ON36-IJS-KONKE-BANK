import { User } from "../model/user.model";
import { UserCliente } from "../model/userCliente.model";
import { UserGerente } from "../model/userGerente.model";

export class UserFactory {
    criarUser(id:string, nome:string, tipo:TipoUser, endereco: string, telefone: string):User{
        switch(tipo) {
            case TipoUser.CLIENTE:
                return new UserCliente()
            case TipoUser.GERENTE:
                return new UserGerente()
        }
    }
}