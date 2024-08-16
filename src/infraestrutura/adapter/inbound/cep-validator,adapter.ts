import { Injectable } from "@nestjs/common";
import { CepValidatorPort } from "../../domain/inbound/cep-validator.port";

@Injectable()
export class CepValidatorAdapter implements CepValidatorPort {
  async validate(cep: string): Promise<boolean> {

    const cepPattern = /^[0-9]{5}-?[0-9]{3}$/;
    return cepPattern.test(cep);
  }
}