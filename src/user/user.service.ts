import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs'
import { User } from './model/user.model';
import { ContaCorrente } from 'src/contas/model/contaCorrente';
import { ContasService } from 'src/contas/contas.service';
import { Contas } from 'src/contas/model/contas.model';
import { UserCliente } from './model/userCliente.model';
import { UserFactory } from './factories/user.factory';

@Injectable()
export class UserService {
    private readonly filePathUser = path.resolve('src/user/users.json') 
    private listaDeClientes = []
       
    constructor(
      private readonly contaService: ContasService,
      private readonly userFactory: UserFactory
    ){
      const user = this.lerUser();
      this.listaDeClientes
    }

    private lerUser(): User[] {
      const data = fs.readFileSync(this.filePathUser, 'utf8');
      return JSON.parse(data) as User[];
    }
    
    private modificarUser(users: User[]): void {
      fs.writeFileSync(this.filePathUser, JSON.stringify(users, null, 2),'utf8',);
    }
  
    criarUser(
      id: string,
      nome: string,
      tipo: TipoUser,
      endereco: string,
      telefone: string
            
    ): User {
      const listaUser = this.lerUser();
      const newUser = this.userFactory.criarUser(
        id,
        nome,
        tipo,
        endereco,
        telefone
      );
  
      listaUser.push(newUser);
      this.modificarUser(listaUser);
      return newUser;
    }
  
    findAll():User[] {
      return this.lerUser();
    }

    /* findAllTipo(tipo: TipoUser): {
       this.lerUser();
    } */
  
    findById(id: string) {
      const users = this.lerUser();
      const user = users.find((users) => users.id === id);
  
      if (!user) {
        throw new Error(`User ${id} não encontrada`);
      }
  
      return user;
    }

    removerUser(id: string): void { 
      const users = this.lerUser();
      const userIndex = users.findIndex((users) => users.id === id);
  
      users.splice(userIndex, 1);
      this.modificarUser(users);
    }   
    
}

