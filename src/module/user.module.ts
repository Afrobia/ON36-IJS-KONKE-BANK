import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { UserRepository } from '../repository/user.repository';
import { UserFactory } from '../factory/user.factory';
import { CreateUserDto } from '../dto/create-user.dto';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, UserFactory,CreateUserDto],
})
export class UserModule {}
