import { ContasFactory } from "../factories/contas.factory";
import { TipoConta } from "../enum/tipoConta";
import { UserCliente } from "src/cliente/userCliente.model";

describe('ContasFactory', () =>{
    test("Deveria ser uma função", () => {
        expect (ContasFactory).toBeInstanceOf(Function)
    })

    test('criarContaDeveria me retornar vazio', () => {
        const contaFactory = new ContasFactory()
        const criarConta = contaFactory.criarConta() 
        expect(criarConta).toBe(undefined)
    })
    //test("Deveria criar uma conta Corrente",() => {})
    //test("Deveria criar uma conta Poupança",() => {})

})