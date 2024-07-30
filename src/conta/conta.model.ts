
export class Conta implements ContaBancaria {
  contaId: number;
  saldo: number;
  tipo: "corrente" | "poupanca";
  transacao: Transacao
    constructor(contaId: number, saldo: number, tipo:'corrente' | 'poupanca') {}
  
}