import { IsNotEmpty } from 'class-validator';
import { UserCliente } from '../cliente.model';

export class ClienteJuridico extends UserCliente {
  cnpj: string;
}
