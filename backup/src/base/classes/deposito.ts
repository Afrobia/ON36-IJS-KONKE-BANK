
class DepositoConta implements IDeposito {
    depositar(
      valor: number,
      saldo: number,
      setSaldo: (value: number) => void
    ): void {
      if (valor <= 0) {
        throw Error("Valor deve ser maior que 0");
      } else {
        const newSaldo = saldo + valor;
        setSaldo(newSaldo);
      }
    }
  }