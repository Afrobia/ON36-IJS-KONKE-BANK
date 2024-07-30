import { Cliente } from "./cliente";

export abstract class Conta {
  private clienteId : string | null = null;
  private saldo: number;
  private saque: Saque;
  private deposito: Deposito
  
  constructor(clienteId: string, saldo: number, saque: Saque, deposito:Deposito) { 
    this.clienteId = clienteId;
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

  doTransferencia(valor:number, contaDestinho: Conta){
    if(valor <= this.saldo){
      this.doSaque(valor);
      contaDestinho.doDeposito(valor)
    }
    
  }

  setSaldo(valor: number) {
    this.saldo = valor;
  }

  getClienteId(): string | null {
    return this.clienteId;
}
}


