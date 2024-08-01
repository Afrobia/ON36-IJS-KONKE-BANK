import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ClienteService } from './userCliente.service';
import { GerenteService } from './UserGerente.service';

@Module({
  controllers: [UserController],
  providers: [ClienteService,GerenteService]
})
export class UserModule {}
