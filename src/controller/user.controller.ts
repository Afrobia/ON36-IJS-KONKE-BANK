import { Body, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { TUser} from '../model/user.entity';
import { TipoUser } from '../enum/user.enum';
import { CreateUserDto } from '../dto/create-user.dto';
import { CepValidationInterceptor } from '../cep/cep-validator.interceptor';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UseInterceptors(CepValidationInterceptor)
  criarUser(@Param('gerenteId') gerenteId: string, @Body('tipoUser') tipo: TipoUser, @Body() user: CreateUserDto):TUser {
    this.userService.isAutorizado(gerenteId)
    return this.userService.criarUser(tipo, user);
  }

  @Get()
  findAllUsers(@Param('gerenteId') gerenteId: string): TUser[] {
    this.userService.isAutorizado(gerenteId)
    return this.userService.findAllUsers();
  }

  @Get('id')
  findUserById(@Param('gerenteId') gerenteId: string, userId: string): TUser {
    this.userService.isAutorizado(gerenteId)
    return this.userService.findUserById(userId);
  }

  @Delete('id')
  removerUser(@Param('gerenteId') gerenteId: string, userId: string): void {
    this.userService.isAutorizado(gerenteId)
    return this.userService.removerUser(userId);
  }
}
