interface ISaque {
    sacar(
      valor: number,
      saldo: number,
      setSaldo: (value: number) => void,
      saldoSuplementar?: number
    ): void;
  }

 