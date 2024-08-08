import { Injectable } from "@nestjs/common";
import { TipoContas } from "../model/contas.model";
import { uuid } from "uuidv4";


@Injectable()
export class ContasRepository {
  contas: TipoContas[] = [];

  criarConta(conta: TipoContas): TipoContas {
    conta.id = uuid();
    this.contas.push(conta);
    return conta;
  }

  removerConta(contaId: string): void {
    this.contas = this.contas.filter((conta) => conta.id !== contaId);
  }

  findContaById(contaId: string): TipoContas | null {
    const conta = this.contas.find((conta) => conta.id === contaId);
    return conta;
  }
}