import { Contas } from "./contas.model";
import { SaquePoupanca } from "src/metodoTransacao/saque/saquePoupanca.model";
import { DepositoPoupanca } from "src/metodoTransacao/deposito/debitoPoupanca.model";

export class ContaPoupanca implements Contas{
    id: number;
    clienteId: string;
    saldo: number;
    saque: SaquePoupanca;
    deposito: DepositoPoupanca;
    taxaRendimento: number
    
    constructor(){}
    
    
}