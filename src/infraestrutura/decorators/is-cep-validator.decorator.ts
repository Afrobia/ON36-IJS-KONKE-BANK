import { registerDecorator, ValidationOptions } from 'class-validator';
import { CepValidatorPort } from '../domain/inbound/cep-validator.port';

export function IsCepValid(validator: CepValidatorPort, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCepValid',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        async validate(cep: string) {
          return validator.validate(cep);
        },
      },
    });
  };
}