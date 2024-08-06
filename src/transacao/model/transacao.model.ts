export interface Transacao {
  id: string;
  contaId: string;
  valor: number;
  tipo: TipoTransacao;
  data: Date
}

export class Transacao implements Transacao {
  constructor(){}
}

