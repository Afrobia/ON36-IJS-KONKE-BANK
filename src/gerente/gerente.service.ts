import { Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from 'fs';
import { ContasService } from "src/contas/contas.service";
import { ClienteService } from "src/cliente/cliente.service";
import { UserService } from "src/user/user.service";
import { UserGerente } from "./userGerente.model";

@Injectable()
export class GerenteService extends UserService {
  private readonly filePath = path.resolve('src/.json/userGerente.json');
  private clienteService : ClienteService;
  private contasService: ContasService;



  private lerGerente(): UserGerente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as UserGerente[];
  }

  private modificarGerente(gerentes: UserGerente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(gerentes, null, 2), 'utf8');
  }

  criarGerente(nome: string, endereco: string, telefone: string): UserGerente {
    const listaGerentes = this.lerGerente();
    const newGerente = new UserGerente(nome, endereco, telefone);

    listaGerentes.push(newGerente);
    this.modificarGerente(listaGerentes);

    return newGerente;
  }

  findAll(): UserGerente[] {
    return this.lerGerente();
  }

  findById(id: string) {
    const gerentes = this.lerGerente();
    const user = gerentes.find((gerentes) => gerentes.id === id);

    if (!user) {
      throw new Error(`User ${id} não encontrada`);
    }

    return user;
  }

  removerGerente(id: string): void {
    const gerentes = this.lerGerente();
    const gerenteIndex = gerentes.findIndex((gerentes) => gerentes.id === id);

    gerentes.splice(gerenteIndex, 1);
    this.modificarGerente(gerentes);
  }
  

  adicionarCliente(id:string){
    const gerentes = this.lerGerente()
    const cliente = this.clienteService.findByGerente(id)
    const gerente = this.findById(id)

    gerente.listaIdCliente.push(cliente.id)
    gerentes.push(gerente)
    
    this.modificarGerente(gerentes)
    
  }

}
