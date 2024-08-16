import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsPhoneNumber, IsString, Matches } from 'class-validator';
import { CepValidatorAdapter } from '../../cep/adapter/inbound/cep-validator,adapter';
import { IsCepValid } from '../../cep/decorators/is-cep-validator.decorator';

@Injectable()
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsCepValid(new CepValidatorAdapter(), { message: 'CEP inválido' })
  cep: string;

  @IsNotEmpty()
  @Matches(/^(?:\(?\d{2}\)?\s)?(?:\d{4,5}-\d{4})$/, {
    message:
      'Telefone inválido. Formatos aceitos: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX',
  })
  @IsPhoneNumber('BR', { message: 'Número de telefone inválido para o Brasil' })
  telefone: string;

  @IsNotEmpty()
  cadUnico: string;
}
