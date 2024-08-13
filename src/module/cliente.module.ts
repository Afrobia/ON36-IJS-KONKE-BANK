import { Module } from '@nestjs/common';
import { ClienteController } from '../controller/cliente.controller';
import { ClienteService } from '../service/cliente.service';
import { ClienteRepository } from '../repository/cliente.repository';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository],
  exports: [ClienteService, ClienteRepository]
})
export class ClienteModule {}
