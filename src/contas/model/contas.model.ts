import { Deposito } from "src/metodoTransacao/deposito/deposito.interface";
import { Saque } from "src/metodoTransacao/saque/saque.interface";

export interface Contas {
    id: number;
    clienteId: string;
    saldo: number;
    saque:  Saque,
    deposito: Deposito,
}



