import { Injectable } from '@nestjs/common';
import { TUser } from '../domain/model/user.entity';
import { TipoUser } from '../../enum/user.enum';
import { CreateUserDto } from '../dto/create-user.dto';
import { Gerente } from 'src/user/domain/model/feature/gerente.model';
import { UserFactory } from '../domain/factory/user.factory';
import { UserRepository } from '../adapter/user.repository';

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

  async isAutorizado(gerenteId: string): Promise<TUser> {
    return this.userRepository.userIsAuthorized(gerenteId);
  }

  async adicionarGerente(gerenteId: string, user: TUser){
    const gerente = await this.isAutorizado(gerenteId);

    if(gerente instanceof Gerente){
      user.gerente = gerente
    }
     throw new Error('Id de gerente ínvalido')
  }

  async adicionarClienteAGerente(gerenteId: string, user: TUser) {
    const gerente = await this.isAutorizado(gerenteId);
    if(gerente instanceof Gerente){

    const cadUnico = {id: user.id}
      gerente.clientes.push(cadUnico)
    }
  }
}
