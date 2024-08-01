import { Contas } from "./contas.model";
import { SaqueCorrente } from "src/metodoTransacao/saque/saqueCorrente.model";
import { DepositoCorrente } from "src/metodoTransacao/deposito/debitoCorrente.model";

export class ContaCorrente implements Contas{
    id: number;
    clienteId: string;
    saldo: number;
    saque: SaqueCorrente;
    deposito: DepositoCorrente;
    saldoChequeEspecial: number

    constructor(){
    }  
    

}