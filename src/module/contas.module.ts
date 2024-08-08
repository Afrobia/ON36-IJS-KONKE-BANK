import { Module } from '@nestjs/common';
import { ContasService } from '../service/contas.service';
import { ContasController } from '../controller/contas.controller'
import { ContasFactory } from '../factory/contas.factory';
import { ClienteModule } from './cliente.module';
import { ContasRepository } from '../repository/contas.repository';



@Module({
  imports:[ClienteModule],
  providers: [ContasService, ContasRepository,ContasFactory],
  controllers: [ContasController],
  exports: [ContasService, ContasFactory, ContasRepository]
})
export class ContasModule {}
