import { Contas } from './contas.entity';
import { ClienteJuridico } from './user-feature/clienteJuridico.model';
import { TipoUser } from '../enum/user.enum';
import { ClienteFisico } from './user-feature/clienteFisico.model';
import { Gerente } from './user-feature/gerente.model';

export abstract class User {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  cadastroUnico?: string;
  tipoUser: TipoUser.FISICO | TipoUser.JURIDICO | TipoUser.GERENTE;
  autorizado: true | false;
  gerente?: Gerente;
  contas?: Contas[];
}
export type TUser = ClienteFisico | ClienteJuridico | Gerente;
