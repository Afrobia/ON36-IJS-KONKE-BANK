import { Test, TestingModule } from '@nestjs/testing';
import { ClienteController } from '../../controller/cliente.controller';
import { ClienteModule } from '../../module/cliente.module';

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
  
});
