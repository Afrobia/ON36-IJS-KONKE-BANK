import { Injectable } from '@nestjs/common';
import { TipoCliente } from '../enum/cliente.enum';
import { ClienteFisico } from '../model/clienteFeature/clienteFisico.model';
import { ClienteJuridico } from '../model/clienteFeature/clienteJuridico.model';
import { CreateClienteDto } from '../dto/create-cliente.dto';

@Injectable()
export class ClienteFactory {
  criarCliente(
    tipo: TipoCliente,
    createClienteDto: CreateClienteDto
  ): ClienteFisico | ClienteJuridico {
    switch (tipo) {
      case TipoCliente.FISICO:
        const clienteFisico = new ClienteFisico();
        clienteFisico.nome = createClienteDto.nome;
        clienteFisico.endereco = createClienteDto.cep;
        clienteFisico.telefone = createClienteDto.telefone;
        clienteFisico.cpf = createClienteDto.cadastroUnico;
        clienteFisico.gerente = null;
        clienteFisico.contas = [];
        clienteFisico.tipoCliente = TipoCliente.FISICO;

        return clienteFisico;

      case TipoCliente.JURIDICO:
        const clienteJuridico = new ClienteJuridico();
        clienteJuridico.nome = createClienteDto.nome;
        clienteJuridico.endereco = createClienteDto.cep;
        clienteJuridico.telefone = createClienteDto.telefone;
        clienteJuridico.cnpj = createClienteDto.cadastroUnico;
        clienteFisico.gerente = null;
        clienteJuridico.contas = [];
        clienteJuridico.tipoCliente = TipoCliente.JURIDICO;

        return clienteJuridico;

      default:
        throw new Error('Tipo escolhido é invalido');
    }
  }
}
