import { Injectable } from '@nestjs/common';
import { TUser } from '../model/user.entity';
import { uuid } from 'uuidv4';
import { TipoUser } from 'src/enum/user.enum';

@Injectable()
export class UserRepository {
  static readonly users: TUser[] = [];

  constructor() {}

  criarUser(user: TUser): TUser {
    user.id = uuid();
    UserRepository.users.push(user);
    return user;
  }

  findAllUsers(): TUser[] {
    return UserRepository.users;
  }

  findUsersByGerenteId(gerenteId: string): TUser[] {
    return UserRepository.users.filter((user) => user.gerente.id === gerenteId);
  }

  findUserByIdEGerenteId(userId: string, gerenteId: string): TUser | null {
    const user = UserRepository.users.find(
      (user) => user.id === userId && user.gerente.id === gerenteId,
    );

    return user;
  }

  findUserByContaId(contaId: string): TUser | null {
    const user = UserRepository.users.find((user) => {
      return user.contas.some((conta) => conta.id === contaId);
    });

    return user;
  }

  userIsAuthorized(userId: string): TUser {
    const user = this.findUserById(userId);

    if (user.autorizado == false) {
      throw new Error('Usuario não Autorizado');
    }
    return user
  }

  filterUserByTipo(tipo: TipoUser): TUser[] | null {
    const users = UserRepository.users.filter((user) => user.tipoUser === tipo);
    return users;
  }

  findUserById(userId: string): TUser | null {
    const user = UserRepository.users.find((user) => user.id === userId);

    return user;
  }

  removerUser(userId: string): void {
    UserRepository.users.filter((user) => user.id !== userId);
  }
}
