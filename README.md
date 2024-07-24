# {KONKE} Bank - banco comunitário para comunidades quilombolas

# Banco comunitário para comunidades Quilombolas

Tem como objetivo criar um banco comunitário para comunidades quilombolas. Este banco oferecerá serviços financeiros tradicionais juntamente com incentivos adicionais através de uma moeda social circulante local.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Implementação de Conta


## Objetivos de aprendizagem do desafio 🎯
- Entender como o TypeScript, uma linguagem de programação superset de JavaScript, se integra naturalmente ao ecossistema do Node.js e NESTjs
- Compreender os princípios e características de uma arquitetura RESTful.
- Identificar os recursos, URIs, métodos HTTP e códigos de status comuns em uma API REST.
- Aprender a projetar e implementar uma API RESTful usando Node.js e NESTjs, seguindo as melhores práticas de REST.

## Desafio 02 - {Reprograma}Bank
 
Abaixo estão os requisitos:
* Cada cliente do banco tem as seguintes informações:
  - Nome completo
  - Número de identificação (ID)
  - Endereço = classe Endereco
  - Número de telefone

* Requisitos de negócio:
  - Cada cliente pode ter uma ou mais contas bancárias.  
  - As contas podem ser do tipo Conta Corrente ou Conta Poupança.
  - Para a conta corrente, armazenar o limite do cheque especial.
  - Para a conta poupança, é armazenar a taxa de juros.
  - As Contas podem fazer tranferencia e saque deposito 

### Projeto Inicial 
- Criei as classe Cliente e Classe Conta  e vinculei a conta ao id do cliente
- Criei interfaces para cada transações separadamente, crie classes de saque e depósito implementando os comportamentos dependendo do tipo de conta, cada comportamento foi atribuido a classe conta.
- Crieis as derivadas da Classe Conta( poupança e corrente), 
- Implementei a transferencia nas classes

## Desafio 03 - {Reprograma}Bank

-Utilizando Nest.js
-Implementação de conta
-CRUD ( Criar, editar, remover contas)