// 1ª etapa - criando um teste que falha 

test('Criar Transação deve ser uma funcao', () =>{
    const criarTransacao = {};
    expect(criarTransacao).toBeInstanceOf(Function)
})