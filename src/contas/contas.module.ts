import { Module } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContasController } from './contas.controller';
import { ContasFactory } from './factories/contas.factory';
import { ClienteModule } from 'src/cliente/cliente.module';
import { ContasRepository } from './contas.repository';



@Module({
  imports:[ClienteModule],
  providers: [ContasService, ContasRepository,ContasFactory],
  controllers: [ContasController],
  exports: [ContasService, ContasFactory, ContasRepository]
})
export class ContasModule {}
