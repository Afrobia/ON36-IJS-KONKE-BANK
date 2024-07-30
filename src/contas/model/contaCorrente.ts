import { Contas } from "./contas.model";

export class ContaCorrente implements Contas{
    id: number;
    clienteId: string;
    saldo: number;
    
    saldoChequeEspecial: number

    constructor(){}  

}