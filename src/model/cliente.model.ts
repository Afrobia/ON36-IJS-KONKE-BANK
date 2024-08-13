import { Contas } from '../model/contas.model';
import { ClienteJuridico } from './clienteFeature/clienteJuridico.model';
import { TipoCliente } from '../enum/cliente.enum';
import { ClienteFisico } from './clienteFeature/clienteFisico.model';
import { User } from './user.model';
import { UserGerente } from './gerente.model';

export abstract class UserCliente {
  id: string;
  usuario: User;
  tipoCliente: TipoCliente.FISICO | TipoCliente.JURIDICO;
  gerente?: UserGerente;
  contas?: Contas[];
}

export type TClientes = ClienteFisico | ClienteJuridico;
