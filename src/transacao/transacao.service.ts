import { Injectable, NotFoundException } from '@nestjs/common';
import { Transacao } from './model/transacao.model';
import { ContasService } from 'src/contas/contas.service';
import * as path from 'path';
import * as fs from 'fs'

@Injectable()
export class TransacaoService {
  private readonly filePath = path.resolve('src/transacoes/transacoes.json');
  private idCounter: number;

  constructor(private readonly contasService: ContasService) {
    const transacoes = this.readTransacoes();
    this.idCounter =
      transacoes.length > 0 ? transacoes[transacoes.length - 1].id + 1 : 1;
  }

  private readTransacoes(): Transacao[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Transacao[];
  }

  private modificarTransacoes(transacoes: Transacao[]): void {
    fs.writeFileSync(
      this.filePath,
      JSON.stringify(transacoes, null, 2),
      'utf8',
    );
  }

  registrarTransacao(
    contaId: number,
    valor: number,
    tipo: TipoTransacao,

  ): Transacao {
    const conta = this.contasService.findById(contaId);
    if (!conta) {
      throw new NotFoundException('Conta não encontrada');
    }

    const newTransacao = new Transacao(
      this.idCounter++,
      contaId,
      valor,
      tipo,
      new Date(),
    );
    const Transacoes = this.readTransacoes();
    Transacoes.push(newTransacao);
    this.modificarTransacoes(Transacoes);
    
    return newTransacao;
  }

  findAll(): Transacao[] {
    return this.readTransacoes();
  }

  updateTransacao(TransacaoUpdated: Transacao): Transacao {
    const listOfTransacoes = this.readTransacoes();
    const TransacaoIndex = listOfTransacoes.findIndex(
      (trans) => trans.id === TransacaoUpdated.id,
    );
    if (TransacaoIndex === -1) {
      throw new NotFoundException('Transacao not found');
    }

    const updatedTransacao: Transacao = {
      ...TransacaoUpdated,
    };

    listOfTransacoes[TransacaoIndex] = updatedTransacao;
    this.modificarTransacoes(listOfTransacoes);
    return updatedTransacao;
  }

  cancelarTransacao(id: number): void {
    const listOfTransacoes = this.readTransacoes();
    const index = listOfTransacoes.findIndex(
      (Transacao) => Transacao.id === id,
    );

    if (index < 0) {
      throw new NotFoundException('Transacao não encontrada');
    }

    listOfTransacoes.splice(index, 1);
    this.modificarTransacoes(listOfTransacoes);
  }

  //notificar a cada transação ao cliente por sms utilizand Telefone, notificar atravez da conta
   /*  doTransferencia(valor:number, contaDestinho: Conta){
      if(valor <= this.saldo){
        this.doSaque(valor);
        contaDestinho.doDeposito(valor)
    }  */
}
