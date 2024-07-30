export class Transacao {
  constructor(
    public id: number,
    public contaId: number,
    public valor: number,
    public tipo: TipoTransacao,
    public data: Date,
  ) {}
}
