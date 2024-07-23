import { Endereco } from "./endereco";

export class Cliente {
  private nome: string;
  private clienteId: string;
  protected telefone: string;
  protected endereco: Endereco;

  constructor(
    nome: string,
    clienteId: string,
    telefone: string,
    endereco: Endereco
  ) {
    this.nome = nome;
    this.clienteId = clienteId;
    this.telefone = telefone;
    this.endereco = endereco;
  }

  getClienteId():string {
    return this.clienteId
  }

  getNome():string{
    return this.nome

  }

}

const cliente1 = new Cliente('João Silva', 'cdf1235', '(00)0000-0000', new Endereco("00.000-000", 'Rua 1', 36, 'sem complemento', "Centro", 'Recife', 'PE'));
console.log(cliente1);
