import { Saque } from "./saque.interface";

export class SaqueCorrente implements Saque{
    sacar(
        valor: number,
        saldo: number,
        atualizarSaldo: (valor: number) => void,
        getChequeEspecial: number,
      ) {
        if (valor === 0) {
          throw Error('Valor deve ser maior que 0');
        }
    
        if (saldo >= valor) {
          const newSaldo = saldo - valor;
    
          atualizarSaldo(newSaldo);

        } else if (saldo < valor && getChequeEspecial + saldo >= valor) {
            const newSaldo = saldo - valor
            getChequeEspecial += newSaldo
    
          atualizarSaldo(newSaldo);
        } else {

          throw new Error('Transação negada, saldo infuciente');
        }
      } 
      
}
