import { Contas } from "./contas.model";

export class ContaPoupanca implements Contas{
    id: number;
    clienteId: string;
    saldo: number;
    tipo = TipoConta.POUPANCA
    taxaRendimento: number
    constructor(){}
    
}