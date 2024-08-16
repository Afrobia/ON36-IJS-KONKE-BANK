export interface CepValidatorPort {
    validate(cep: string): Promise<boolean>;
  }