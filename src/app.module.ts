import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ContasModule } from './contas/contas.module';


@Module({
  imports: [UserModule, ContasModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
