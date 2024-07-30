import { Contas } from "./contas.model";

export class ContaPoupanca implements Contas{
    id: number;
    saldo: number;
    tipo = TipoConta.POUPANCA
    taxaRendimento: number
    constructor(){}
    
}