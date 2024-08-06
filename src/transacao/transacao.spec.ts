import {Transacao} from './model/transacao.model'
// 2ª etapa - criando um teste que seja aprovado com o minimo de código

test('Criar Transação deve ser uma funcao', () =>{
    expect(Transacao).toBeInstanceOf(Function)
})

