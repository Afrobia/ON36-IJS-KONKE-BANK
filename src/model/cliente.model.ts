import { Contas } from '../model/contas.model';
import { ClienteJuridico } from './clienteFeature/clienteJuridico.model';
import { TipoCliente } from '../enum/cliente.enum';
import { ClienteFisico } from './clienteFeature/clienteFisico.model';
import { User } from './user.model';

export abstract class UserCliente {
  id: string;
  usuario: User;
  tipoCliente: TipoCliente.FISICO | TipoCliente.JURIDICO;
  gerenteId: string;
  contas?: Contas[];
}

export type TClientes = ClienteFisico | ClienteJuridico;
