import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ContasModule } from './contas/contas.module';
import { GerenteController } from './gerente/gerente.controller';
import { ClienteService } from './cliente/cliente.service';
import { GerenteService } from './gerente/gerente.service';
import { UserFactory } from './user/factories/user.factory';
import { ContasFactory } from './contas/factories/contas.factory';
import { GerenteModule } from './gerente/gerente.module';
import { ClienteModule } from './cliente/cliente.module';
import { TransacaoModule } from './transacao/transacao.module';


@Module({
  imports: [UserModule, ContasModule, GerenteModule, ClienteModule, TransacaoModule],
  controllers: [AppController, GerenteController],
  providers: [AppService, ClienteService, GerenteService,UserFactory,ContasFactory],
})
export class AppModule {}
