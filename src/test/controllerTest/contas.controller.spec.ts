import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import supertest from 'supertest';
import { INestApplication } from '@nestjs/common';
import { TipoConta } from '../../enum/conta.enum';
import { ContasService } from '../../contas/aplication/contas.service';
import { UserService } from '../../user/application/user.service';
import { ContasFactory } from '../../contas/domain/factory/contas.factory';
import { TUser } from '../../user/domain/model/user.entity';
import { UserRepository } from '../../user/adapter/outbound/user.repository';
import { ContasRepository } from '../../contas/adapter/outbound/contas.repository';
import { ContasController } from '../../contas/adapter/inbound/contas.controller';


describe('ContasController', () => {
  let controller: ContasController;
  let app: INestApplication;
  let cliente: TUser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        ContasService,
        UserService,
        UserRepository,
        ContasFactory,
        ContasRepository,
      ],
      controllers: [ContasController],
    }).compile();

    controller = module.get<ContasController>(ContasController);
    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(controller).toBeInstanceOf(ContasController);
  });

  test('Deveria criar uma conta ', () => {
    const tipo = TipoConta;

    return supertest(app.getHttpServer())
      .post('/contas')
      .send({ tipo, cliente })
      .expect(201)
      .expect(({ body }) => {
        expect(body.tipo).toBe(tipo);
        expect(body.cliente).toBe(cliente);
      });
  });
});
