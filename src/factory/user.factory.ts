import { Injectable } from '@nestjs/common';
import { TipoUser } from '../enum/user.enum';
import { ClienteFisico } from '../model/user-feature/clienteFisico.model';
import { ClienteJuridico } from '../model/user-feature/clienteJuridico.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { Gerente } from 'src/model/user-feature/gerente.model';

@Injectable()
export class UserFactory {
  criarUser(
    tipo: TipoUser,
    createUserDto: CreateUserDto
  ): ClienteFisico | ClienteJuridico | Gerente {
    switch (tipo) {
      case TipoUser.FISICO:
        const clienteFisico = new ClienteFisico();
        clienteFisico.nome = createUserDto.nome;
        clienteFisico.endereco = createUserDto.cep;
        clienteFisico.telefone = createUserDto.telefone;
        clienteFisico.cpf = createUserDto.cadastroUnico;
        clienteFisico.autorizado = false;
        clienteFisico.gerente = null;
        clienteFisico.contas = [];
        clienteFisico.tipoUser = TipoUser.FISICO;

        return clienteFisico;

      case TipoUser.JURIDICO:
        const clienteJuridico = new ClienteJuridico();
        clienteJuridico.nome = createUserDto.nome;
        clienteJuridico.endereco = createUserDto.cep;
        clienteJuridico.telefone = createUserDto.telefone;
        clienteJuridico.cnpj = createUserDto.cadastroUnico;
        clienteFisico.autorizado = false;
        clienteJuridico.gerente = null;
        clienteJuridico.contas = [];
        clienteJuridico.tipoUser = TipoUser.JURIDICO;

        return clienteJuridico;
      
      case TipoUser.GERENTE:
        const gerente = new Gerente()
        gerente.nome = createUserDto.nome;
        gerente.endereco = createUserDto.cep;
        gerente.telefone = createUserDto.telefone;
        gerente.autorizado = true;
        gerente.gerente = null;
        gerente.contas = [];
        gerente.clientes = []
        gerente.tipoUser = TipoUser.GERENTE;
        
        return gerente;
        
      default:
        throw new Error('Tipo escolhido é invalido');
    }
  }
}
