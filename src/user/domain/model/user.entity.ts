import { Contas } from '../../../contas/domain/model/contas.entity';
import { ClienteJuridico } from './feature/clienteJuridico.model';
import { TipoUser } from '../../../enum/user.enum';
import { ClienteFisico } from './feature/clienteFisico.model';
import { Gerente } from './feature/gerente.model';

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
