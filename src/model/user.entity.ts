import { Contas } from './contas.entity';
import { ClienteJuridico } from './user-feature/clienteJuridico.model';
import { TipoUser } from '../enum/user.enum';
import { ClienteFisico } from './user-feature/clienteFisico.model';
import { Gerente } from './user-feature/gerente.model';
import { CreateUserDto } from 'src/dto/create-user.dto';

export abstract class User {
  id: string;
  user: CreateUserDto
  tipoUser: TipoUser.FISICO | TipoUser.JURIDICO | TipoUser.GERENTE;
  autorizado: true | false;
  cadUnico?: string
  gerente?: Gerente;
  contas?: Contas[];
}
export type TUser = ClienteFisico | ClienteJuridico | Gerente;
