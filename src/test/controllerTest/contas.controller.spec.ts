import { Test, TestingModule } from '@nestjs/testing';
import { ContasController } from '../../controller/contas.controller';
import { AppModule } from 'src/app.module';

describe('ContasController', () => {
  let controller: ContasController;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
      imports:[AppModule]
    }).compile();

    controller = module.get<ContasController>(ContasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
