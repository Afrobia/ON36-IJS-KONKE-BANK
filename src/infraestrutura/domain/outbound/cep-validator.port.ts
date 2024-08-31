export interface CepValidator {
    validarCep(cep: string): Promise <boolean>;
}