import { TipoConta } from "./tipoConta.enum";

export class Conta {
  id: number;
  saldo: number;
  tipo: TipoConta
    constructor(id: number, saldo: number, tipo: TipoConta) {}
}
