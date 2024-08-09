import { Injectable } from '@nestjs/common';
import { ContasFactory } from '../factory/contas.factory';
import { ContasRepository } from '../repository/contas.repository';
import { UserCliente } from '../model/cliente.model';
import { Contas, TipoContas } from '../model/contas.model'
import { TipoConta } from '../enum/conta.enum';


@Injectable()
export class ContasService {

  constructor(
    private readonly contasRepository: ContasRepository,
    private readonly contasFactory: ContasFactory,
  ) {}

  
  criarConta(tipo:TipoConta, cliente: UserCliente): TipoContas {
    this.validarCliente(cliente, tipo)
    const conta = this.contasFactory.criarConta(tipo, cliente);

    return this.contasRepository.criarConta(conta)
  }

  findByContaId(contaId:string) {
    return this.contasRepository.findContaById(contaId)
  }

  validarCliente(cliente: UserCliente, tipoConta: TipoConta) {
    const lista = this.contasRepository.filterAllContasPorTipo(tipoConta)
    const conta = lista.find((conta) => conta.cliente === cliente) 

    if(conta){
      throw new Error('Cliente já possui conta desse tipo')
    }

  }
  

  // Adapter
  modificarTipoDeConta(contaId: string, novoTipo: TipoConta): TipoContas{
    const conta = this.contasRepository.findContaById(contaId);
    const cliente = conta.cliente

    this.removerConta(contaId);
    
    return this.criarConta(novoTipo,cliente)
  }

  removerConta(contaId: string): void {
    this.contasRepository.removerConta(contaId)

  }

  realizarTransacao(valor: number, contaId: string , tipoTransacao: TipoTransacao, destino: Contas) {
    const conta = this.contasRepository.findContaById(contaId)

    switch(tipoTransacao) {
      case TipoTransacao.SAQUE:
        conta.saque(valor)
      case TipoTransacao.DEPOSITO:
        conta.deposito(valor)
      case TipoTransacao.TRANSFERENCIA:
        conta.transferencia(destino, valor)
      default:
        throw new Error('Tipo de transacao Invalida')
    }
  } 

}
