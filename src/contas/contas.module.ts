import { Module } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContasController } from './contas.controller';
import { ClienteService } from 'src/cliente/cliente.service';
import { ContasFactory } from './factories/contas.factory';


@Module({
  providers: [ContasService, ClienteService,ContasFactory],
  controllers: [ContasController],
  exports: [ContasService]
})
export class ContasModule {}
