import * as supertest from 'supertest'
import { Test, TestingModule } from '@nestjs/testing';
import { ClienteController } from '../cliente.controller';
import { INestApplication } from '@nestjs/common';
import { ClienteModule } from '../cliente.module';

describe('ClienteController', () => {
  let controller: ClienteController;
 
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[ClienteModule],
      controllers: [ClienteController],
    }).compile();

    controller = module.get<ClienteController>(ClienteController);
  });

  test('Cliente Controller', () => {
    expect(controller).toBeInstanceOf(ClienteController)
  })
  
  test('criando um cliente ', () => {

    controller.criarCliente(cliente)
  })
});
