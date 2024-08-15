import { Injectable } from '@nestjs/common';
import { TipoContas } from '../domain/model/contas.entity';
import { uuid } from 'uuidv4';
import { TipoConta } from 'src/enum/conta.enum';

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

    if (!conta) {
      return null;
    }

    return conta;
  }

  findAllContas(): TipoContas[] {
    return this.contas;
  }

  filterAllContasPorTipo(tipoConta: TipoConta): TipoContas[] {
    const listaTipo = this.contas.filter(
      (conta) => conta.tipoConta == tipoConta,
    );
    return listaTipo;
  }
}
