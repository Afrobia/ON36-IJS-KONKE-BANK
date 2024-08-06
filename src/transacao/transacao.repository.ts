import { randomUUID } from 'crypto';
import { Transacao } from './model/transacao.model';

export class TransacaoRepository {
  /* transacoes: Transacao[] = [];

  criarTransacao(transacao: Transacao) {
    transacao.id = randomUUID();
    transacao.data = new Date();
    this.transacoes.push(transacao);

  }

  removerTransacao(transacaoId: string): void {
    this.transacoes = this.transacoes.filter(
      (transacao) => transacao.id !== transacaoId
    );
  }

  findTransacoesByData(data: Date): Transacao[] {
    const transacoes = this.transacoes.filter(
      (transacoes) => transacoes.data === data
    );
    return transacoes;
  }

  findTransacoesContaId(contaId: string): Transacao[] {
    const transacoes = this.transacoes.filter(
      (transacoes) => transacoes.contaId === contaId
    );
    return transacoes;
  }

  findAllTransacoes() {
    return this.transacoes;
  }
 */
}
