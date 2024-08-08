import { UserCliente } from "../../cliente/userCliente.model"
import { TipoConta } from "../enum/tipoConta"
import { ContasFactory } from "../factories/contas.factory"
import { ContaCorrente } from "../model/contaCorrente"
import { ContaPoupanca } from "../model/contaPoupanca"

describe('Contas factory', ()=> {
const cliente = new UserCliente('Beatriz', 'Tão Tão distante', "6565626")  
    //criar conta conrrente
    test("deveria criar uma conta corrente",()=>{
        
        const contaFactory = new ContasFactory()
        const retornado = contaFactory.criarConta(TipoConta.CORRENTE, cliente)
       
        if(retornado instanceof ContaCorrente){
            expect(retornado.cliente).toBe(cliente);
            expect(retornado.chequeEspecial).toBe(150);
            expect(retornado.saldo).toBe(0);

        }
    })
    //criar conta poupança
    test('deveria criar uma conta poupanca', () => {
        
        const contaFactory = new ContasFactory()
        const retornado = contaFactory.criarConta(TipoConta.POUPANCA, cliente)
       
        if(retornado instanceof ContaPoupanca){
            expect(retornado.cliente).toBe(cliente);
            expect(retornado.taxaRendimento).toBe(0.025);
            expect(retornado.saldo).toBe(10);

        }

    })

        
    
})