import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { UserRepository } from '../repository/user.repository';
import { UserFactory } from '../factory/user.factory';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, UserFactory],
})
export class UserModule {}
