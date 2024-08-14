import { IsNotEmpty } from "class-validator"
import { UserCliente } from "../cliente.model"
import { IsCPF } from "class-validator-cpf"

export class ClienteFisico extends UserCliente {
    @IsNotEmpty()
    @IsCPF()
    cpf: string
  
}