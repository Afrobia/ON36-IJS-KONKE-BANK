import { Contas } from "./contas.interface";


export class ContaCorrente implements Contas{

    id:number
    clienteId: string;
    saldo: number;
    tipo: string
    saldoChequeEspecial: number;

    constructor(id:number,tipo:string,
    clienteId: string,
    saldo: number){
        this.id = id
        this.tipo = tipo
        this.clienteId = clienteId;
        this.saldo = saldo
    } 
    
    
}