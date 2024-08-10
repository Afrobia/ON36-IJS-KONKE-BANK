import * as supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';

describe('ClienteController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test('Deveria criar um cliente', () => {
    const nome = 'Pamela';
    const endereco = ' Rua José Alonso';
    const telefone = '365256446';

    return supertest(app.getHttpServer())
      .post('/cliente')
      .send({ nome, endereco, telefone })
      .expect(201)
      .expect(({ body }) => {
        expect(body.nome).toBe(nome);
        expect(body.endereco).toBe(endereco);
        expect(body.telefone).toBe(telefone);
      });
  });

});
