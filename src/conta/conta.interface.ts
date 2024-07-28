interface ContaBancaria {
    contaId: number;
    saldo:number;
    tipo: 'corrente' | 'poupanca'
}

interface Transacao {
    tipo: 'saque', 'debito', 'transferencia'
}