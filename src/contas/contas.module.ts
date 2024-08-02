import { Module } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContasController } from './contas.controller';
import { ClienteService } from 'src/cliente/cliente.service';
import { ContasFactory } from './factories/contas.factory';
import { UserFactory } from 'src/user/factories/user.factory';

@Module({
  providers: [ContasService, ClienteService,ContasFactory,UserFactory],
  controllers: [ContasController]
})
export class ContasModule {}
