import { Module } from '@nestjs/common';
import { TransacaoRepository } from './transacao.repository';

@Module({
  providers: [TransacaoRepository]
})
export class TransacaoModule {}
