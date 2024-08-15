import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';
import { UserService } from './user/aplication/user.service';
import { ContasFactory } from './contas/domain/factory/contas.factory';
import { UserModule } from './user/user.module';
import { ContasService } from './contas/aplication/contas.service';
import { ContasController } from './contas/aplication/contas.controller';
import { CepValidatorAdapter } from './cep/adapter/input/cep-validator,adapter';
import { UserRepository } from './user/adapter/user.repository';
import { UserController } from './user/aplication/user.controller';
import { UserFactory } from './user/domain/factory/user.factory';



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
