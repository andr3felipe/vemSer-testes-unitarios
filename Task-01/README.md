# BDD

## Exercício 1 (formatString):

### Funcionalidade:

- Como um usuário
- Quero formatar uma mensagem.
- Para torná-la mais agradável.

### Cenário: Formatar mensagem com sucesso.

- Dado: que o usuário envia uma mensagem do tipo STRING
- Quando: for feita a validação da mensagem com sucesso
- Então: deve visualizar a mensagem formatada

### Cenário: Formatar mensagem, erro.

- Dado: que o usuário envia uma mensagem que NÃO é do tipo STRING
- Quando: a mensagem não for válida
- Então: deve visualizar a mensagem de erro

## Exercício 2 (sum):

### Funcionalidade:

- Como um usuário
- Quero fazer uma operação matemática de soma
- Para saber o resultado

### Cenário:

- Dado: que o usuário envia 2 números
- Quando: for feita a validação dos números (tipo NUMBER, naturais e positivos)
- Então: deve retornar mensagem de erro OU resultado da operação matemática

## Exercício 3 (yesNo):

### Funcionalidade:

- Como um usuário
- Quero enviar um texto
- Para receber uma resposta

### Cenário: Envia qualquer parâmetro que não seja do tipo STRING;

- Dado: dado que o usuário envia o parâmetro;
- Quando: for constatado que não se trata de uma STRING;
- Então: deve retornar a mensagem "Argument must be a string";

### Cenário: "Sim";

- Dado: dado que o usuário envia "Sim";
- Quando: for feita a validação da mensagem;
- Então: deve retornar a mensagem "Parabéns";

### Cenário: "Não";

- Dado: dado que o usuário envia "Não";
- Quando: for feita a validação da mensagem;
- Então: deve retornar a mensagem "Encerrando sua sessão…";

### Cenário: "Qualquer outro texto";

- Dado: dado que o usuário envia qualquer outro texto;
- Quando: for feita a validação da mensagem;
- Então: deve retornar a mensagem "Você tem noções dos seus atos?";

## Exercício 4 (howCanIHelpYou):

### Funcionalidade:

- Como um usuário
- Quero ser atendido
- Para resolver X.Y.Z

### Cenário: Parâmetro (client, attendant) que NÃO seja do tipo STRING;

- Dado: dado que o usuário envia os parâmetros;
- Quando: for constatado que não se trata de uma STRING;
- Então: deve retornar a mensagem "Both arguments must be a string";

### Cenário: Ambos os parâmetros (client, attendant) do tipo STRING;

- Dado: dado que o usuário envia os parâmetros;
- Quando: for validado que se trata de uma STRING;
- Então: deve retornar a mensagem "Olá <client> eu me chamo <attendant>, em que posso ajudar?";

## Exercício 5 (howCanIHelpYou):

### Funcionalidade:

- Como um usuário
- Quero enviar um número
- Para fazer a conversão em dias, horas, minutos, segundos

### Cenário: Parâmetro não é do tipo NUMBER;

- Dado: dado que o usuário envia o parâmetro;
- Quando: for constatado que não se trata de um tipo NUMBER;
- Então: deve retornar a mensagem "Argument must be a number";

### Cenário: É um número negativo;

- Dado: dado que o usuário envia o número;
- Quando: for constatado que é um número negativo;
- Então: deve retornar a mensagem "Argument must be a positive number";

### Cenário: É um número positivo NÃO natural;

- Dado: dado que o usuário envia o número;
- Quando: for constatado que é um número NÃO natural;
- Então: deve retornar a mensagem "Argument must be a natural number";

### Cenário: É um número positivo e natural;

- Dado: dado que o usuário envia o número;
- Quando: for constatado que é um número positivo, natural e for feito a conversão do número para seus valores correspondentes em dias, horas, minutos e segundos;
- Então: deve retornar a mensagem com o resultado da conversão;

## Exercício 6 (isLeapYear):

### Funcionalidade:

- Como um usuário
- Quero enviar um número no formato AAAA representando um ANO
- Para saber se o ano é bissexto

### Cenário: Parâmetro não é do tipo NUMBER;

- Dado: dado que o usuário envia o parâmetro;
- Quando: for constatado que não se trata de um tipo NUMBER;
- Então: deve retornar a mensagem "Argument must be a number";

### Cenário: Não tem o formato AAAA;

- Dado: dado que o usuário envia o parâmetro;
- Quando: for constatado não atende o formato de AAAA;
- Então: deve retornar a mensagem "Argument must have 4 digits";

### Cenário: Não é um número positivo;

- Dado: dado que o usuário envia o parâmetro;
- Quando: for constatado não é um número positivo;
- Então: deve retornar a mensagem "Argument must be a positive number";

### Cenário: Não é um número natural;

- Dado: dado que o usuário envia o parâmetro;
- Quando: for constatado não é um número natural;
- Então: deve retornar a mensagem "Argument must be a natural number";

### Cenário: Sucesso;

- Dado: dado que o usuário envia o parâmetro;
- Quando: for constatado que é um número, positivo, natural no formato AAAA;
- Então: deve retornar "true" ou "false";

## Exercício 7 (operationResult):

### Funcionalidade:

- Como um usuário
- Quero fazer uma operação matemática
- Para saber o resultado

### Cenário:

- Dado: que o usuário envia os parâmetros
- Quando: for feita a validação dos números (tipo NUMBER, naturais e positivos) e tipo de operação ("+", "-", "/", "\*")
- Então: deve retornar mensagem de erro OU resultado da operação matemática

## Exercício 8 (operationResult):

### Funcionalidade:

- Como um usuário
- Quero calcular a minha média
- Para saber se passei de ano

### Cenário:

- Dado: que o usuário envia as notas e seus respectivos pesos
- Quando: for feita a validação dos números (tipo NUMBER, e positivos), maiores ou iguais a zero.
- Então: deve retornar mensagem de erro ou o cálculo da média.
