import { Contas } from "./contas.interface";


export class ContaCorrente implements Contas{
    
    id: number;
    clienteId: string;
    saldo: number;
    tipo:string
    saldoChequeEspecial: number;

    constructor(tipo:string,
    clienteId: string,
    saldo: number){
        this.id
        this.tipo = tipo
        this.clienteId = clienteId;
        this.saldo = saldo
    } 
    
    
}