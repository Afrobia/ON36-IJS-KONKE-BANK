import { Saque } from "./saque.interface";

export class SaquePoupanca implements Saque {
    
    sacar(valor: number, saldo: number, atualizarSaldo: (value: number) => void) {
        if (valor === 0) {
          throw Error("Valor deve ser maior que 0");
        }
    
        if (saldo >= valor) {
          const newSaldo = saldo - valor;
          atualizarSaldo(newSaldo);
        }
      }
}