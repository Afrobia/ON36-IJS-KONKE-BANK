import { Module } from '@nestjs/common';
import { ContasService } from './aplication/contas.service';
import { ContasFactory } from './domain/factory/contas.factory';
import { UserModule } from '../user/user.module';
import { ContasRepository } from './adapter/outbound/contas.repository';
import { ContasController } from './adapter/inbound/contas.controller';




@Module({
  imports:[UserModule],
  providers: [ContasService, ContasRepository,ContasFactory],
  controllers: [ContasController],
  exports: [ContasService, ContasFactory, ContasRepository]
})
export class ContasModule {}
