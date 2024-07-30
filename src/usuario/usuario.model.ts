import { randomUUID } from "crypto";


export class Usuario {
  id: string;
  nome: string;
  
  constructor(id:string, nome:string){
      this.id = randomUUID(),
      this.nome = nome    }
}