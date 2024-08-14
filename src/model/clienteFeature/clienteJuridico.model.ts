import { IsNotEmpty } from "class-validator"
import { UserCliente } from "../cliente.model"

export class ClienteJuridico extends UserCliente {
  @IsNotEmpty()
  cnpj: string 
}