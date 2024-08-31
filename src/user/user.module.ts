import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserFactory } from './domain/factory/user.factory';
import { UserController } from './adapter/inbound/user.controller';
import { UserRepository } from './adapter/outbound/user.repository';


@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, UserFactory, CreateUserDto],
})
export class UserModule {}
