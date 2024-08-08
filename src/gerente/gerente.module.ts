import { Module } from '@nestjs/common';
import { ClienteModule } from '../cliente/cliente.module';
import { ContasModule } from '../contas/contas.module';
import { GerenteController } from './gerente.controller';
import { GerenteService } from './gerente.service';
import { GerenteRepository } from './gerente.repository';

@Module({
    imports: [ContasModule, ClienteModule],
    controllers: [GerenteController],
    providers: [GerenteService, GerenteRepository],
    exports: [GerenteService, GerenteRepository]
})
export class GerenteModule {}
