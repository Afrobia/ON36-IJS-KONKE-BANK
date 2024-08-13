import { Injectable } from '@nestjs/common';
import { TipoCliente } from '../enum/cliente.enum';
import { UserGerente } from '../model/gerente.model';
import { ClienteFisico } from '../model/clienteFeature/clienteFisico.model';
import { User } from 'src/model/user.model';
import { ClienteJuridico } from '../model/clienteFeature/clienteJuridico.model';

@Injectable()
export class ClienteFactory {
  criarCliente(
    tipo: TipoCliente,
    usuario: User,
    gerente: UserGerente,
  ): ClienteFisico | ClienteJuridico {
    switch (tipo) {
      case TipoCliente.FISICO:
        const clienteFisico = new ClienteFisico();
        clienteFisico.usuario = usuario;
        clienteFisico.contas = [];
        clienteFisico.gerenteId = gerente.id;
        clienteFisico.tipoCliente = TipoCliente.FISICO;

        return clienteFisico;

      case TipoCliente.JURIDICO:
        const clienteJuridico = new ClienteJuridico();
        clienteJuridico.usuario = usuario;
        clienteJuridico.contas = [];
        clienteJuridico.gerenteId = gerente.id;
        clienteJuridico.tipoCliente = TipoCliente.JURIDICO;

        return clienteJuridico;

      default:
        throw new Error('Tipo escolhido é invalido');
    }
  }
}
