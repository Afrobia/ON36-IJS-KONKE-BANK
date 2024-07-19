class DepositoContaCorrente implements IDeposito {
  depositar(
    valor: number,
    saldo: number,
    setSaldo: (value: number) => void,
    getChequeEspecial: number
  ): void {
    if (valor <= 0) {
      throw Error("Valor deve ser maior que 0");
    } else {
      const newSaldo = saldo + getChequeEspecial + valor;
      setSaldo(newSaldo);
    }
  }
}
