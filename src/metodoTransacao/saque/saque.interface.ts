export interface Saque {
    sacar(
        valor: number,
        saldo: number,
        atualizarSaldo: (valor: number) => void,
        saldoSuplementar?: number,
      ): void;  
}


