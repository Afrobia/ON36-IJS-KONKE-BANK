import { Cliente } from "./cliente";

export abstract class Conta {
  clienteId : string | null = null;
  saldo: number;
  saque: ISaque;
  deposito: IDeposito
  
  constructor(clienteId: string, saldo: number, saque: ISaque, deposito:IDeposito) { 
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

  public getClienteId(): string | null {
    return this.clienteId;
}
}


