// 1ª etapa - criando um teste que falha 

test('Criar Transação', () =>{
    expect(criarTransacao).toBeInstanceOf(Function)
})