import { Injectable } from '@nestjs/common';
import { TipoContas } from './model/contas.model';
import { ContasFactory } from './factories/contas.factory';
import { ContasRepository } from './contas.repository';
import { UserCliente } from 'src/cliente/userCliente.model';

@Injectable()
export class ContasService {

  constructor(
    private readonly contasRepository: ContasRepository,
    private readonly contasFactory: ContasFactory,
  ) {}

  
  criarConta(tipo:TipoConta, cliente: UserCliente): TipoContas {
    const conta = this.contasFactory.criarConta(tipo, cliente);

    return this.contasRepository.criarConta(conta)
  }

  modificarTipoDeConta(contaId: string, novoTipo: TipoConta): TipoContas{
    const conta = this.contasRepository.findContaById(contaId);
    const cliente = conta.cliente

    this.removerConta(contaId);
    
    return this.criarConta(novoTipo,cliente)
  }

  removerConta(contaId: string): void {
    this.contasRepository.removerConta(contaId)

  }

}
