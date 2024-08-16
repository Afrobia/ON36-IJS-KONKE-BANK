import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';
import { UserService } from './user/application/user.service';
import { ContasFactory } from './contas/domain/factory/contas.factory';
import { UserModule } from './user/user.module';
import { ContasService } from './contas/aplication/contas.service';
import { CepValidatorAdapter } from './cep/adapter/inbound/cep-validator,adapter';
import { UserFactory } from './user/domain/factory/user.factory';
import { ContasController } from './contas/adapter/inbound/contas.controller';
import { UserController } from './user/adapter/inbound/user.controller';
import { UserRepository } from './user/adapter/outbound/user.repository';



@Module({
  imports: [AppModule, ContasModule, UserModule],
  controllers: [
    AppController,
    ContasController,
    UserController,
  ],
  providers: [
    AppService,
    UserService,
    UserFactory,
    UserRepository,
    ContasFactory,
    ContasService,
    CepValidatorAdapter,
  ],
  exports: [CepValidatorAdapter],
})
export class AppModule {}
