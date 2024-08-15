import { Module } from '@nestjs/common';
import { ContasService } from './aplication/contas.service';
import { ContasController } from './aplication/contas.controller'
import { ContasFactory } from './domain/factory/contas.factory';
import { UserModule } from '../user/user.module';
import { ContasRepository } from './adapter/contas.repository';



@Module({
  imports:[UserModule],
  providers: [ContasService, ContasRepository,ContasFactory],
  controllers: [ContasController],
  exports: [ContasService, ContasFactory, ContasRepository]
})
export class ContasModule {}
