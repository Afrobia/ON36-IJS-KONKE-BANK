import { Contas } from "src/contas/model/contas.model";

export interface Transacao {
  id: string;
  contaId: string;
  valor: number;
  tipo: TipoTransacao;
  data: Date
}

/* export class Transacao {
   
  constructor(contaId:string, valor: number) {
    this.contaId = contaId
    this.valor = valor 
  }
}
 */


