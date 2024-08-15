import { Module } from '@nestjs/common';
import { UserService } from './aplication/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './adapter/user.repository';
import { UserFactory } from './domain/factory/user.factory';
import { UserController } from './aplication/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, UserFactory, CreateUserDto],
})
export class UserModule {}
