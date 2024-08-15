import { Injectable } from '@nestjs/common';
import { TipoUser } from '../enum/user.enum';
import { ClienteFisico } from '../model/user-feature/clienteFisico.model';
import { ClienteJuridico } from '../model/user-feature/clienteJuridico.model';
import { Gerente } from '../model/user-feature/gerente.model';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UserFactory {
  criarUser(
    tipo: TipoUser,
    user: CreateUserDto,
    ): ClienteFisico | ClienteJuridico | Gerente {
    switch (tipo) {
      case TipoUser.FISICO:
        const clienteFisico = new ClienteFisico();
        clienteFisico.user = user
        clienteFisico.autorizado = false;
        clienteFisico.gerente = null;
        clienteFisico.contas = [];
        clienteFisico.tipoUser = TipoUser.FISICO;

        return clienteFisico;

      case TipoUser.JURIDICO:
        const clienteJuridico = new ClienteJuridico();
        clienteJuridico.user = user
        clienteJuridico.autorizado = false;
        clienteJuridico.gerente = null;
        clienteJuridico.contas = [];
        clienteJuridico.tipoUser = TipoUser.JURIDICO;

        return clienteJuridico;
      
      case TipoUser.GERENTE:
        const gerente = new Gerente()
        gerente.user = user
        gerente.autorizado = true;
        gerente.contas = [];
        gerente.clientes = []
        gerente.tipoUser = TipoUser.GERENTE;
        
        return gerente;
        
      default:
        throw new Error('Tipo escolhido é invalido');
    }
  }
}
