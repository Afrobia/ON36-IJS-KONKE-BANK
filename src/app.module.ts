import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './module/contas.module';
import { UserService } from './service/user.service';
import { ContasFactory } from './factory/contas.factory';
import { UserModule } from './module/user.module';
import { ContasService } from './service/contas.service';
import { ContasController } from './controller/contas.controller';
import { UserController } from './controller/user.controller';
import { UserFactory } from './factory/user.factory';
import { CepValidatorAdapter } from './cep/adapter/input/cep-validator,adapter';


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
    ContasFactory,
    ContasService,
    CepValidatorAdapter,
  ],
  exports: [CepValidatorAdapter],
})
export class AppModule {}
