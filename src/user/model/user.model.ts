import { randomUUID } from "crypto";

export interface User {
    nome:string;
    id:string;
    tipo: TipoUser
    endereco: string;
    telefone: string;
}



