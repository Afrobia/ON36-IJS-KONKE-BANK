export class Endereco {
  private cep: string;
  private rua: string;
  private numero: number;
  private complemento: string;
  private bairro: string;
  private cidade: string;
  private estado: string;

  constructor(
    cep: string,
    rua: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,

  ) {
    this.cep = cep;
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  
  get getCEP() {
    return this.cep;
  }

  get getRua() {
    return this.rua;
  }

  get getNumero() {
    return this.numero;
  }

  get getComplemento() {
    return this.complemento;
  }
  
  get getBairro() {
    return this.bairro;
  }
  
  get getCidade() {
    return this.cidade;
  }
  
  get getEstado() {
    return this.estado;
  }
  
}