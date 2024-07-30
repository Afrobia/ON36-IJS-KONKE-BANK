import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {};

    @Post()
    criarUser(@Body('id') id:string, @Body('nome') nome:string, @Body('tipo') tipo: TipoUser, @Body('telefone') telefone: string, @Body('endereco') endereco: string) {
      return this.userService.criarUser(id, nome, tipo, endereco, telefone);
    }
  
    @Get()
    findAll() {
      return this.userService.findAll();
    }
  
    @Get(':id')
    findById(@Param('id') id: string) {
      return this.userService.findById(id);
    }

    @Delete()
    removerUser(@Param('id') id:string) {
        return this.userService.removerUser(id)
    }
    
}
