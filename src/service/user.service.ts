import { Injectable } from '@nestjs/common';
import { TUser } from '../model/user.entity';
import { TipoUser } from '../enum/user.enum';
import { UserFactory } from '../factory/user.factory';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    readonly userFactory: UserFactory,
    readonly userRepository: UserRepository,
  ) {}

  criarUser(tipo: TipoUser, user: CreateUserDto): TUser {
    const usuario = this.userFactory.criarUser(tipo, user);

    return this.userRepository.criarUser(usuario);
  }

  findUserById(userId: string): TUser {
    return this.userRepository.findUserById(userId);
  }
  
  removerUser(userId: string): void {
    this.userRepository.removerUser(userId);
  }

  isAutorizado(gerenteId: string) {
    return this.userRepository.userIsAuthorized(gerenteId);
  }
}
