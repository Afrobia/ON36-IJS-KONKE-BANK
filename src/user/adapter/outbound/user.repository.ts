import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { TUser } from '../../../user/domain/model/user.entity';
import { TipoUser } from '../../../enum/user.enum';


@Injectable()
export class UserRepository {
  private users: TUser[] = [];

  constructor() {}

  criarUser(user: TUser): TUser {
    user.id = uuid();
    this.users.push(user);
    return user;
  }

  findAllUsers(): TUser[] {
    return this.users;
  }

  findUsersByGerenteId(gerenteId: string): TUser[] {
    return this.users.filter((user) => user.gerente.id === gerenteId);
  }

  findUserByIdEGerenteId(userId: string, gerenteId: string): TUser | null {
    const user = this.users.find(
      (user) => user.id === userId && user.gerente.id === gerenteId,
    );

    return user;
  }

  findUserByContaId(contaId: string): TUser | null {
    const user = this.users.find((user) => {
      return user.contas.some((conta) => conta.id === contaId);
    });

    return user;
  }

  userIsAuthorized(userId: string): TUser {
    const user = this.findUserById(userId);

    if (user.autorizado == false) {
      throw new Error('Usuario não Autorizado');
    }
    return user;
  }

  filterUserByTipo(tipo: TipoUser): TUser[] | null {
    const users = this.users.filter((user) => user.tipoUser === tipo);
    return users;
  }

  findUserById(userId: string): TUser | null {
    const user = this.users.find((user) => user.id === userId);

    if (!user) {
      return null;
    }

    return user;
  }

  removerUser(userId: string): void {
    this.users = this.users.filter((user) => user.id !== userId);
  }
}
