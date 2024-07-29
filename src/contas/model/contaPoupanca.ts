import { Contas } from "./contas.model";

export class ContaPoupanca implements Contas{
    id: number;
    balance: number;
    tipo = TipoConta.POUPANCA
    constructor(){}
    
}