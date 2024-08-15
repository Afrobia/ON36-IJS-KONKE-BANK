import { TipoUser } from "../../enum/user.enum"
import { CreateUserDto } from "../../dto/create-user.dto"
import { UserFactory } from "../../factory/user.factory"
import { ClienteFisico } from "../../model/user-feature/clienteFisico.model"
import { ClienteJuridico } from "../../model/user-feature/clienteJuridico.model"
import { Gerente } from "../../model/user-feature/gerente.model"



describe('UserFactory', () => {
    let user = new CreateUserDto()
    let userFactory = new UserFactory()


    test('Deveria criar um Cliente Físico', () => {
        const retornado = userFactory.criarUser(TipoUser.FISICO,user)

        if(retornado instanceof ClienteFisico){
            expect(retornado.autorizado).toBe(false);
            expect(retornado.tipoUser).toBe(TipoUser.FISICO)
        }
    } )

    test('Deveria criar um Cliente Juridico', () => {
        const retornado = userFactory.criarUser(TipoUser.JURIDICO,user)

        if(retornado instanceof ClienteJuridico){
            expect(retornado.autorizado).toBe(false);
            expect(retornado.tipoUser).toBe(TipoUser.JURIDICO)
        }
    } )
    test('Deveria criar um Gerente', () => {
        const retornado = userFactory.criarUser(TipoUser.GERENTE,user)

        if(retornado instanceof Gerente){
            expect(retornado.autorizado).toBe(true);
            expect(retornado.tipoUser).toBe(TipoUser.GERENTE)
        }
    } )
})