import { Contas } from "./contas.model";

export class ContaPoupanca implements Contas{
    id: number;
    clienteId: string;
    saldo: number;

    taxaRendimento: number
    
    constructor(){}
    
}