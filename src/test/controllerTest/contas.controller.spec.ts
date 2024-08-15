import { Test, TestingModule } from '@nestjs/testing';
import { ContasController } from '../../controller/contas.controller';
import { AppModule } from '../../app.module';
import supertest from 'supertest';
import { INestApplication } from '@nestjs/common';
import { UserCliente } from '../../model/cliente.model';
import { TipoConta } from '../../enum/conta.enum';
import { ContasService } from '../../service/contas.service';
import { ClienteService } from '../../service/user.service';
import { ContasFactory } from '../../factory/contas.factory';
import { ContasRepository } from '../../repository/contas.repository';
import { ClienteRepository } from '../../repository/user.repository';

describe('ContasController', () => {
  let controller: ContasController;
  let app: INestApplication
 

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
      imports:[AppModule],
      providers:[ContasService, ClienteService, ClienteRepository, ContasFactory, ContasRepository],
      controllers:[ContasController]
    }).compile();

    controller = module.get<ContasController>(ContasController);
    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(controller).toBeInstanceOf(ContasController)
  });

  test('Deveria criar uma conta ', () => {
    const tipo = TipoConta
    
    return supertest(app.getHttpServer())
      .post('/contas')
      .send({ tipo, cliente})
      .expect(201)
      .expect(({ body }) => {
        expect(body.tipo).toBe(tipo);
        expect(body.cliente).toBe(cliente);
      });
  });

});
