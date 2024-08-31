import { Module } from "@nestjs/common";
import { ViaCepAdapter } from "./adapter/outbound/cep-validator.adapter";


@Module({
    providers: [ViaCepAdapter],
    exports: [ViaCepAdapter],
})
export class CepModule {}