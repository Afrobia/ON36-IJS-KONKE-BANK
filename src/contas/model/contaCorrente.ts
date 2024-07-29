import { Contas } from "./contas.model";

export class ContaCorrente implements Contas{
    id: number;
    balance: number;
    tipo = TipoConta.CORRENTE
    constructor(){}
    
}