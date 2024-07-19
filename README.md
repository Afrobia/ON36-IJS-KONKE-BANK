# {KONKE} Bank - banco comunitário para comunidades quilombolas

# Banco comunitário para comunidades Quilombolas

Tem como objetivo criar um banco comunitário para comunidades quilombolas. Este banco oferecerá serviços financeiros tradicionais juntamente com incentivos adicionais através de uma moeda social circulante local.

## Objetivos de aprendizagem do desafio 🎯
 - Compreensão dos princípios da Programação Orientada a Objetos (POO), como abstração, encapsulamento, herança e polimorfismo.
 - Prática na implementação de classes abstratas, interfaces e classes concretas.
 - Experiência em criar e manipular hierarquias de classes para modelar sistemas.
 - Aprendizado sobre a relação entre diferentes classes e como elas se interconectam para formar um sistema coeso.
 - Desenvolvimento de habilidades na escrita e organização de código legível e modular.
 - Reforço da compreensão sobre como diagramas podem ser úteis para visualizar a estrutura e o relacionamento entre classes em um sistema.

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

## SERVIÇOS FINANCEIROS QUE PRETENDE SER OFERECIDO

- Crédito para financiamento de empreendimentos solidários.
- Crédito para consumo pessoal e familiar, sem juros.
- Cartão de crédito popular solidário.
- Abertura e extrato de conta corrente.
- Depósito em conta corrente.
- Saque avulso ou com cartão magnético.
- Pagamento de contas (água, luz, telefone etc.).
- Recebimento de aposentadorias e outros valores governamentais
- Gerentes da conta
- Prestação de contas diário e semanal para toda a comunidade


## Projeto Inicial 
- Criei as classe Cliente e Classe Conta  e vinculei a conta ao id do cliente
- Criei interfaces para cada transações separadamente, crie classes de saque e depósito implementando os comportamentos dependendo do tipo de conta, cada comportamento foi atribuido a classe conta.
- Crieis as derivadas da Classe Conta( poupança e corrente), 
- Implementei a transferencia nas classes

## Diagrama de classes - Sistema Bancário

![Diagrama de classes - Sistema bancário(projeto piloto)](<docs/diagrama - sistemaBancarip.drawio.png>)
