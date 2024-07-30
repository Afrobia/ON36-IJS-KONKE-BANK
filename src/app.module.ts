import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ContasModule } from './contas/contas.module';
import { TransacaoModule } from './transacao/transacao.module';

@Module({
  imports: [UserModule, ContasModule, TransacaoModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
