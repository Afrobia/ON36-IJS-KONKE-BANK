import { Cliente } from "./cliente";

export class Conta {
  private clienteId : string | null = null;
  private saldo: number;
  saque: ISaque;
  deposito: IDeposito
  
  
  constructor(saldo: number, saque: ISaque, deposito:IDeposito) { 
    
    this.saldo = saldo;
    this.saque = saque;
    this.deposito = deposito
    
  }

  public vincularCliente(cliente: Cliente):void {
    this.clienteId = cliente.getClienteId()
  }

  doSaque(valor: number) {
    this.saque.sacar(valor, this.saldo, this.setSaldo);
  }
  doDeposito(valor: number) {
    this.deposito.depositar(valor, this.saldo, this.setSaldo);
  }

  setSaldo(valor: number) {
    this.saldo = valor;
  }

  public getClienteId(): string | null {
    return this.clienteId;
}
}


