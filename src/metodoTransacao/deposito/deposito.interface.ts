export interface Deposito{
    depositar(
        valor: number,
        saldo: number,
        atualizarSaldo: (valor: number) => void,
        saldoSuplementar?: number,
      ): void;
}




