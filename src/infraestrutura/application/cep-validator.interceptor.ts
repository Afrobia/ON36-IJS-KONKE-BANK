import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, map, Observable } from "rxjs";
import { ViaCepAdapter } from "../adapter/outbound/cep-validator.adapter";


@Injectable()
export class CepValidationInterceptor implements NestInterceptor {
    viaCepAdapter = new ViaCepAdapter()
   

    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const cep = request.body.cep;

        // Validação do CEP
        const isCepValido = await this.viaCepAdapter.validarCep(cep);
        if (!isCepValido) {
            throw new Error('CEP inválido');
        }

        return next.handle().pipe(
            map(data => data),
            catchError(err => {
                throw err;
            }),
        );
    }
    
}