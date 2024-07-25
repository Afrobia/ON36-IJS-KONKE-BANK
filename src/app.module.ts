import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContaModule } from './conta/conta.module';
import { ClienteModule } from './cliente/cliente.module';
import { GerenteModule } from './gerente/gerente.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ContaModule, ClienteModule, GerenteModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
