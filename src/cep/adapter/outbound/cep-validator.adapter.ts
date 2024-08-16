import { Injectable } from "@nestjs/common";
import { CepValidator } from "../../domain/outbound/cep-validator.port";
import axios from "axios";

@Injectable()
export class ViaCepAdapter implements CepValidator {
    async validarCep(cep: string): Promise<boolean> {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data && !response.data.erro;
    }
}