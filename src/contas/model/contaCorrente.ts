import { Contas } from "./contas.model";

export class ContaCorrente implements Contas{
    id: number;
    clienteId: string;
    saldo: number;
    tipo = TipoConta.CORRENTE
    saldoChequeEspecial: number
    
    constructor(){}
    
}