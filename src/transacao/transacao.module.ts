import { Module } from '@nestjs/common';
import { TransacaoRepository } from './transacao.repository';
import { Transacao } from './model/transacao.model';

@Module({
  providers: [Transacao, TransacaoRepository]
})
export class TransacaoModule {}
