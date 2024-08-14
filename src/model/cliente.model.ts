import { Contas } from '../model/contas.model';
import { ClienteJuridico } from './clienteFeature/clienteJuridico.model';
import { TipoCliente } from '../enum/cliente.enum';
import { ClienteFisico } from './clienteFeature/clienteFisico.model';
import { UserGerente } from './gerente.model';

export abstract class UserCliente {
  id: string;
  nome: string;
  endereco: string;
  telefone:string;
  cadastroUnico:string;
  tipoCliente: TipoCliente.FISICO | TipoCliente.JURIDICO;
  gerente?: string;
  contas?: Contas[];
}
export type TClientes = ClienteFisico | ClienteJuridico;


