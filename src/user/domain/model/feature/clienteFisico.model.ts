import { IsCPF } from 'class-validator-cpf';
import { User } from '../user.entity';

export class ClienteFisico extends User {
  @IsCPF()
  cpf: string;
}
