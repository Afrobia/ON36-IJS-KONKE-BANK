import { Module } from '@nestjs/common';
import { ClienteController } from '../controller/cliente.controller';
import { ClienteService } from '../service/cliente.service';
import { ClienteRepository } from '../repository/cliente.repository';
import { ClienteFactory } from 'src/factory/userCliente.factory';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository, ClienteFactory],
  exports: [ClienteService, ClienteRepository]
})
export class ClienteModule {}
