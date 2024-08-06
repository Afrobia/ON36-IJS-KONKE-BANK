import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { ContasService } from 'src/contas/contas.service';
import { UserService } from 'src/user/user.service';
import { UserCliente } from './userCliente.model';


@Injectable()
export class ClienteService extends UserService{
    private readonly filePath = path.resolve('src/.json/userClientes.json');
    private contaService: ContasService;
  
  
    private lerCliente(): UserCliente[] {
      const data = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data) as UserCliente[];
    }
  
    private modificarCliente(clientes: UserCliente[]): void {
      fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), 'utf8');
    }
  
    criarCliente(nome: string, endereco: string, telefone: string, gerente: string): UserCliente {
      const listaClientes = this.lerCliente();
      const newCliente = new UserCliente(nome, endereco, telefone, gerente);
    
      listaClientes.push(newCliente);
      this.modificarCliente(listaClientes);
  
      return newCliente;
    }
    
    findAll(): UserCliente[] {
    
     return this.lerCliente();
    }
  
    findById(id: string) {
      const clientes = this.lerCliente();
      const user = clientes.find((clientes) => clientes.id === id);
  
      if (!user) {
        throw new Error(`User ${id} não encontrada`);
      }
  
      return user;
    }
  
    removerCliente(id: string): void {
      const clientes = this.lerCliente();
      const clienteIndex = clientes.findIndex((clientes) => clientes.id === id);
  
      clientes.splice(clienteIndex, 1);
      this.modificarCliente(clientes);
    }
    
    addConta(id: string) {
      const listaClientes = this.lerCliente()
      const cliente = this.findById(id)
      const conta = this.contaService.findConta(id)

      cliente.contas.push(conta)
      listaClientes.push(cliente)
      this.modificarCliente(listaClientes)
      
    }
  
    getIdGerente(id: string):string {
      const cliente = this.findById(id)
      const gerenteId = cliente.gerente
  
      return gerenteId
    }
    
    findByGerente(gerenteId:string){
      const clientes = this.lerCliente()
      const cliente = clientes.find((clientes) => clientes.gerente == gerenteId)
  
      return cliente.id
    }
  
}
