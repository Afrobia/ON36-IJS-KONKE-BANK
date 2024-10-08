import { Injectable } from '@nestjs/common';
import { ContasFactory } from '../domain/factory/contas.factory';
import { TUser } from '../../user/domain/model/user.entity';
import { TipoContas } from '../domain/model/contas.entity';
import { TipoConta } from '../../enum/conta.enum';
import { ContasRepository } from '../adapter/outbound/contas.repository';


@Injectable()
export class ContasService {
  constructor(
    private readonly contasRepository: ContasRepository,
    private readonly contasFactory: ContasFactory,
  ) {}

  criarConta(tipo: TipoConta, cliente: TUser): TipoContas {
    this.validarCliente(cliente, tipo);
    const conta = this.contasFactory.criarConta(tipo, cliente);

    return this.contasRepository.criarConta(conta);
  }

  findByContaId(contaId: string) {
    return this.contasRepository.findContaById(contaId);
  }

  validarCliente(cliente: TUser, tipoConta: TipoConta) {
    const lista = this.contasRepository.filterAllContasPorTipo(tipoConta);
    const conta = lista.find((conta) => conta.cliente.id === cliente.id);

    if (conta) {
      throw new Error('Cliente já possui conta desse tipo');
    }
  }

  modificarTipoDeConta(contaId: string, novoTipo: TipoConta): TipoContas {
    const conta = this.contasRepository.findContaById(contaId);
    const cliente = conta.cliente;

    this.removerConta(contaId);

    return this.criarConta(novoTipo, cliente);
  }

  removerConta(contaId: string): void {
    this.contasRepository.removerConta(contaId);
  }

  doSaque(contaId: string, valor: number): boolean {
    const conta = this.findByContaId(contaId);
    const novoSaldo = conta.saque(valor);

    if (isNaN(novoSaldo)) {
      return false;
    }

    this.atualizarSaldo(conta, novoSaldo);

    return true;
  }

  doDeposito(contaId: string, valor: number): number {
    const conta = this.findByContaId(contaId);
    const novoSaldo = conta.deposito(valor);

    return this.atualizarSaldo(conta, novoSaldo);
  }

  atualizarSaldo(conta: TipoContas, valor: number): number {
    return (conta.saldo = valor);
  }

  filterTConta(tipo: TipoConta): TipoContas[]{
    return this.contasRepository.filterAllContasPorTipo(tipo)
  }
}
