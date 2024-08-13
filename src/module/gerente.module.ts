import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente.module';
import { ContasModule } from './contas.module';
import { GerenteController } from '../controller/gerente.controller';
import { GerenteService } from '../service/gerente.service';
import { GerenteRepository } from '../repository/gerente.repository';

@Module({
    imports: [ContasModule, ClienteModule],
    controllers: [GerenteController],
    providers: [GerenteService, GerenteRepository],
    exports: [GerenteService, GerenteRepository]
})
export class GerenteModule {}
