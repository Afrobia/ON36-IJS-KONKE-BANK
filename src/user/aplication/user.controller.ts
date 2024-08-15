import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';

import { TUser } from '../domain/model/user.entity';
import { TipoUser } from '../../enum/user.enum';
import { UserService } from './user.service';
import { CepValidationInterceptor } from '../../cep/cep-validator.interceptor';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('cliente')
  @UseInterceptors(CepValidationInterceptor)
  async criarCliente(
    @Param('gerenteId') gerenteId: string,
    @Body('tipoUser') tipo: TipoUser.FISICO | TipoUser.JURIDICO,
    @Body() user: CreateUserDto,
  ): Promise<TUser> {
    const usuario = this.userService.criarUser(tipo, user);
    await this.userService.adicionarGerente(gerenteId, usuario);
    await this.userService.adicionarClienteAGerente(gerenteId, usuario);
    return usuario;
  }

  @Post('gerente')
  @UseInterceptors(CepValidationInterceptor)
  criarGerente(
    @Body('tipoUser') tipo: TipoUser.GERENTE,
    @Body() user: CreateUserDto,
  ): TUser {
    return this.userService.criarUser(tipo, user);
  }

  @Get('id')
  findUserById(@Param('gerenteId') gerenteId: string, userId: string): TUser {
    this.userService.isAutorizado(gerenteId);
    return this.userService.findUserById(userId);
  }

  @Delete('id')
  removerUser(@Param('gerenteId') gerenteId: string, userId: string): void {
    this.userService.isAutorizado(gerenteId);
    return this.userService.removerUser(userId);
  }
}
