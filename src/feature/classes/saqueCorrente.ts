
class SaqueContaCorrente implements ISaque {
    sacar(
      valor: number,
      saldo: number,
      setSaldo: (value: number) => void,
      getChequeEspecial: number
    ) {
      if (valor === 0) {
        throw Error("Valor deve ser maior que 0");
      }
  
      if (saldo >= valor) {
        const newSaldo = saldo - valor;
        setSaldo(newSaldo);
      } 
    }
  }
  