import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { Gerente } from '../model/feature/gerente.model';
import { ClienteFisico } from '../model/feature/clienteFisico.model';
import { ClienteJuridico } from '../model/feature/clienteJuridico.model';
import { TipoUser } from '../../../enum/user.enum';

@Injectable()
export class UserFactory {
  criarUser(
    tipo: TipoUser,
    user: CreateUserDto,
  ): ClienteFisico | ClienteJuridico | Gerente {
    switch (tipo) {
      case TipoUser.FISICO:
        const clienteFisico = new ClienteFisico();
        clienteFisico.nome = user.nome;
        clienteFisico.endereco = user.cep;
        clienteFisico.telefone = user.telefone;
        clienteFisico.cpf = user.cadUnico;
        clienteFisico.autorizado = false;
        clienteFisico.gerente = null;
        clienteFisico.contas = [];
        clienteFisico.tipoUser = TipoUser.FISICO;

        return clienteFisico;

      case TipoUser.JURIDICO:
        const clienteJuridico = new ClienteJuridico();
        clienteJuridico.nome = user.nome;
        clienteJuridico.endereco = user.cep;
        clienteJuridico.telefone = user.telefone;
        clienteJuridico.cnpj = user.cadUnico;
        clienteJuridico.autorizado = false;
        clienteJuridico.gerente = null;
        clienteJuridico.contas = [];
        clienteJuridico.tipoUser = TipoUser.JURIDICO;

        return clienteJuridico;

      case TipoUser.GERENTE:
        const gerente = new Gerente();
        gerente.nome = user.nome;
        gerente.endereco = user.cep;
        gerente.telefone = user.telefone;
        gerente.cadastroUnico = user.cadUnico;
        gerente.autorizado = true;
        gerente.contas = [];
        gerente.clientes = [];
        gerente.tipoUser = TipoUser.GERENTE;

        return gerente;

      default:
        throw new Error('Tipo escolhido é invalido');
    }
  }
}
