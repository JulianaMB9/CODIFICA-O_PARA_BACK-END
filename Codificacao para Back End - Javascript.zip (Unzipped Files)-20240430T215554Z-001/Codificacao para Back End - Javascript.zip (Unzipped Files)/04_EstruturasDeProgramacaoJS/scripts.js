
//  If
//  A estrutura de controle If é utilizada para realizar testes condicionais 
//  e tomar decisões no código com base em uma condição específica. 
//  O bloco de código dentro do if é executado apenas se a condição fornecida for verdadeira.
let idadeUsuario = 30;

idadeUsuario = prompt("Digite a idade do Usuário: ");

if (idadeUsuario == 19) {
  console.log("A idade do Usuário é igual a 19 anos.");
}

if (idadeUsuario > 25) {
  console.log("A idade do Usuário é maior que 25 anos.");
}



//  If e Else
//  A estrutura de controle If e Else é utilizada para tomar decisões com base em uma condição. 
//  Ela permite a execução de diferentes blocos de código, 
//  dependendo se a condição é verdadeira ou falsa.
let idadePessoa = 18;

idadePessoa = prompt("Qual a sua idade? ");

if (idadePessoa >= 18) {
  console.log("Você é maior de idade.");
} 
else {
  console.log("Você é menor de idade.");
}

let velocidadeCarro = 90;

velocidadeCarro = prompt("Qual a velocidade do seu carro na rodovia? ");

if (velocidadeCarro <= 80) {
  console.log("Você não foi multado.");
} 
else {
  console.log("Você foi multado! Acima da Velocidade Permitida!");
}



//  If, Else If e Else
//  A estrutura If, Else If e Else é usada para tomar decisões com base em condições múltiplas. 
//  Ela permite avaliar várias condições sequencialmente até que uma delas seja verdadeira, 
//  executando o bloco de código associado a essa condição. 
//  Se nenhuma condição for verdadeira e houver um bloco else, o código dentro dele será executado.
let notaAluno = 50;

notaAluno = prompt("Informe a nota do aluno: ");

if (notaAluno >= 90) {
  console.log("A nota do aluno é A.");
} 
else if (notaAluno >= 80) {
  console.log("A nota do aluno é B.");
} 
else if (notaAluno >= 70) {
  console.log("A nota do aluno é C.");
} 
else {
  console.log("A nota do aluno é D.");
}


let nomeUsuario;
let senhaUsuario;

nomeUsuario = prompt("Informe o Nome do Usuário: ");
senhaUsuario = prompt("Informe a Senha do Usuário: ");

if (nomeUsuario == undefined) {
  console.log("Nome do Usuário não definido! Informe o Nome do Usuário para seguir com os próximos passos.");
} 
else if (senhaUsuario == undefined) {
  console.log("Senha do Usuário não definida! Informe a Senha do Usuário para seguir com os próximos passos.");
} 
else if (nomeUsuario == "ADMIN" && senhaUsuario == "ADMIN") {
  console.log("O seu usuário é ADMIN do sistema!");
} 
else {
  console.log("O seu usuário é NÃO É ADMIN do sistema!");
}



//  Switch
//  A instrução Switch é uma estrutura de controle de fluxo que permite 
//  avaliar uma expressão contra vários casos possíveis. 
//  Ela é uma alternativa mais limpa e organizada em comparação com uma série de 
//  instruções If, Else If e Else aninhadas quando há várias condições a serem verificadas.
let diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia da Semana Inválido!");
}


let nomeProfessor = "Jonatan";

switch (nomeProfessor) {
  case "Jonatan":
    console.log("O nome do professor é Jonatan!");
    break;
  case "Matheus":
    console.log("O nome do professor é Matheus!");
    break;
  case "João":
    console.log("O nome do professor é João!");
    break;
  default:
    console.log("O nome do professor não foi encontrado!");
    break;
}



//  Expressão condicional ternária
//  A expressão condicional ternária, também conhecida como operador ternário, 
//  é uma forma compacta e concisa de escrever uma instrução If e Else em uma única linha. 
//  Ela é frequentemente usada para atribuir um valor a uma variável com base em uma condição.
//  Sintaxe: condicao ? valorSeVerdadeiro : valorSeFalso;
//  Se a condição for verdadeira, o valor antes dos dois pontos (:) é retornado; 
//  caso contrário, o valor depois dos dois pontos é retornado.
let idade = 10;
let adulto = (idade >= 18) ? true : false;
console.log(adulto); 


//  While
//  A estrutura de repetição while executa um bloco de código enquanto a condição fornecida for verdadeira. 
//  A condição é avaliada antes de cada iteração (repetição).
let contador = 0;

while (contador <= 10) {
  console.log("O contador é " + contador);
  contador = contador + 1;
}

contador = 10;

while (contador >= 0) {
  console.log("O contador é " + contador);
  contador = contador - 1;
}



//  Do While
//  A estrutura de repetição do while é semelhante ao while, mas a condição é avaliada após a execução do bloco de código. 
//  Isso garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição inicial for falsa.
contador = 0;

do {
  console.log("O contador é " + contador);
  contador = contador + 1;
} while (contador <= 10);

contador = 10;

do {
  console.log("O contador é " + contador);
  contador = contador - 1;
} while (contador >= 0);



//  For
//  A estrutura de repetição for é usada quando o número de iterações é conhecido antecipadamente. 
//  Ele consiste em três partes: inicialização, condição de continuação e expressão de incremento/decremento.

for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}

for (let i = 0; i < 10; i = i + 3) {
  console.log(`A soma de i com 2 é: ${i + 2}`);
}




//  Gerenciamento de Loop
//  break: Encerra imediatamente o loop.
//  continue: Pula para a próxima iteração do loop.

//  break: Encerra imediatamente o loop.
for (let i = 0; i < 5; i = i + 1) {
  if (i === 2) {
    console.log("Entrou no Break!");
    break;
  }
  console.log(i);
}


let nomeCliente;

nomeCliente = "Matheus";

for (let i = 0; i < 10; i = i + 1) {
  if (i == 3) {
    nomeCliente = "João";
  }
  if (i == 5 && nomeCliente == "João") {
    console.log("O nome é João, pode parar");
    break;
  }
  console.log(nomeCliente);
  console.log(i);
}

nomeCliente = "Lucas";

for (let i = 1; i < 6; i = i + 1) {

  if (i == 2) {
    nomeCliente = "Pedro";
  } 
  else if (i > 3 ) {
    nomeCliente = "Antonio";
  }

  if (i == 5 ) {
    console.log("Entrei no Break");
    break;
  }

  console.log(nomeCliente);
  console.log(i);

}


//  continue: Pula para a próxima iteração do loop.
for (let i = 0; i < 5; i = i + 1) {
  if (i === 2) {
    console.log("Entrou no Continue!");
    continue;
  }
  console.log(i);
}


for (let i = 10; i > 0; i = i - 1) {
  if (i % 2 == 0) {
    console.log("Entrou no Continue!");
    continue;
  }
  console.log(i);
}



//  -----------------------------------------------------------------------------------------
//    Operadores Aritméticos
//  -----------------------------------------------------------------------------------------

//  Adição (+): Soma dois operandos.
let adicao = 5 + 3; 
console.log(adicao);

//  Subtração (-): Subtrai o operando da direita do operando da esquerda.
let subtracao = 10 - 3; 
console.log(subtracao);

//  Multiplicação (*): Multiplica dois operandos.
let multiplicacao = 4 * 2; 
console.log(multiplicacao);

//  Divisão (/): Divide o operando da esquerda pelo operando da direita.
let divisao = 8 / 2; 
console.log(divisao);


//  Módulo (%): Retorna o resto da divisão do operando da esquerda pelo operando da direita.
let resto = 10 % 2; 
console.log(resto);

//  Incremento (++): Adiciona 1 ao operando.
for (let i = 0; i < 10; i++) {
  console.log("O i é " + i);
}

//  Decremento (--): Subtrai 1 do operando.
for (let i = 10; i > 0; i--) {
  console.log("O i é " + i);
}



//  -----------------------------------------------------------------------------------------
//    Operadores Lógicos
//  -----------------------------------------------------------------------------------------


//E Lógico (&&): Retorna verdadeiro se ambos os operandos forem verdadeiros.
x = true;
y = false;
resultado = x && y; 
console.log(resultado);

//OU Lógico (||): Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.
x = true;
y = false;
resultado = x || y; 
console.log(resultado);

//NÃO Lógico (!): Inverte o valor de verdadeiro para falso e vice-versa.
x = true;
resultado = !x; 
console.log(resultado);





//  -----------------------------------------------------------------------------------------
//    Operadores Relacionais
//  -----------------------------------------------------------------------------------------

//  Igual a (==): Verifica se dois valores são iguais, mas não leva em consideração o tipo de dado. 
//              Os valores são convertidos, se necessário, para o mesmo tipo antes da comparação.
a = 5;
b = '5';
resultado = a == b;
console.log(resultado);

// ==
// valida apenas o valor > 5 igual 5  = SIM
// resultado = VERDADEIRO

//  Estritamente Igual a (===): Verifica se dois valores são iguais e do mesmo tipo de dado.
a = 5;
b = '5';
resultado = a === b;
console.log(resultado);

//  ===
//  valida o valor >          5 igual 5 = SIM
//  valido o tipo de dados >  number igual string = NAO
//  resultado = FALSO


//  Diferente de (!=): Verifica se dois valores não são iguais, novamente, sem considerar o tipo de dado.
a = 5;
b = '5';
resultado = a != b; 
console.log(resultado);

//  !=
//  valida apenas o valor >  5 diferente de 5 = NAO
//  resultado = FALSO


//  Estritamente Diferente de (!==): Verifica se dois valores não são iguais ou não são do mesmo tipo de dado.
a = 5;
b = '5';
resultado = a !== b; 
console.log(resultado);

//  !==
//  valida o valor >          5 diferente de 5 = NAO
//  valido o tipo de dados >  number diferente de string = SIM
//  resultado = VERDADEIRO



//  Maior que (>): Verifica se o operando da esquerda é maior que o operando da direita.
x = 10;
y = 5;
resultado = x > y;
console.log(resultado);

//  Menor que (<): Verifica se o operando da esquerda é menor que o operando da direita.
x = 10;
y = 15;
resultado = x < y; 
console.log(resultado);

//  Maior ou Igual a (>=): Verifica se o operando da esquerda é maior ou igual ao operando da direita.
x = 10;
y = 10;
resultado = x >= y; 
console.log(resultado);

//  Menor ou Igual a (<=): Verifica se o operando da esquerda é menor ou igual ao operando da direita.
x = 5;
y = 10;
resultado = x <= y; 
console.log(resultado);

//  -----------------------------------------------------------------------------------------
//  Math: O objeto Math fornece métodos para realizar operações matemáticas.
//  -----------------------------------------------------------------------------------------


//  Math.abs(x): Retorna o valor absoluto de um número.
let numero = -5;
let valorAbsoluto = Math.abs(numero);
console.log(valorAbsoluto);

//  Math.ceil(x): Arredonda um número para cima para o inteiro mais próximo.
numero = 4.3;
let arredondadoParaCima = Math.ceil(numero);
console.log(arredondadoParaCima);

//  Math.floor(x): Arredonda um número para baixo para o inteiro mais próximo.
numero = 4.9;
let arredondadoParaBaixo = Math.floor(numero);
console.log(arredondadoParaBaixo);

//  Math.round(x): Arredonda um número para o inteiro mais próximo, arredondando para cima ou para baixo conforme necessário.
numero = 4.5;
let arredondado = Math.round(numero);
console.log(arredondado);

//  Math.max(x, y, z, ...): Retorna o maior valor entre dois ou mais números.
let maiorNumero = Math.max(10, 5, 28, 15, 55);
console.log(maiorNumero);

//  Math.min(x, y, z, ...): Retorna o menor valor entre dois ou mais números.
let menorNumero = Math.min(10, 5, 28, 15, 55);
console.log(menorNumero);

//  Math.pow(x, y): Retorna a base elevada à potência do expoente.
let resultado = Math.pow(2, 3);
console.log(resultado);

// Math.sqrt(x): Retorna a raiz quadrada positiva de um número.
numero = 9;
let raizQuadrada = Math.sqrt(numero);
console.log(raizQuadrada);

//  Se o argumento passado for negativo, o método retornará NaN (Not a Number), 
//  pois a raiz quadrada de números negativos não é um valor real.
numeroNegativo = -4;
let raizNegativa = Math.sqrt(numeroNegativo);
console.log(raizNegativa);

//  Math.PI: Representa a constante matemática π (pi).
console.log(Math.PI); // Exibe: 3.141592653589793
 