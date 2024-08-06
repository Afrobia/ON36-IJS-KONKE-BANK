import { ContasFactory } from "../factories/contas.factory";
import { TipoConta } from "../enum/tipoConta";

describe('ContasFactory', () =>{
    test("Should be a function", () => {
        expect (ContasFactory).toBeInstanceOf(Function)
    })
})