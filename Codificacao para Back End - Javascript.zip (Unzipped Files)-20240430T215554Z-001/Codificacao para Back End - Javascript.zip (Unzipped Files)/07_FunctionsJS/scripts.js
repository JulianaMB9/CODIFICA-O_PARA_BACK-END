
//  Função: Uma função em JavaScript é um bloco de código reutilizável que executa uma tarefa específica. 
//          Funções podem receber parâmetros como entrada, executar instruções e retornar um resultado.



function mensagemInicial() {
  console.log("Iniciando o programa...");
}

mensagemInicial();



 
function exibirMensagem(msg) {
  console.log(msg);
}

exibirMensagem("Iniciando o programa...");


function BoasVindas(nome) {
    console.log(`Olá, ${nome}!`);
}

BoasVindas('Jonatan Eugenio'); 


function exibirUmNumero(num) {
  console.log("O número é: " + num);
}

exibirUmNumero(2);
exibirUmNumero(4);
exibirUmNumero(6);
exibirUmNumero(8);


exibirMensagem("\nIniciando o programa PodeDirigir...");
function podeDirigir(idade, cnh) {
  if(idade >= 18 && cnh == true) {
    console.log(`Idade ${idade} anos, CNH é ${cnh}. Pode dirigir!`);
  } else {
    console.log(`Idade ${idade} anos, CNH é ${cnh}. Não pode dirigir!`);
  }
}

podeDirigir(16,true);
podeDirigir(19,true);
podeDirigir(25,true);
podeDirigir(16,false);
podeDirigir(19,false);
podeDirigir(25,false);




function calculadora(valor1, valor2, operacao) {
  let resultado;

  switch (operacao) {
      case '+':
          resultado = valor1 + valor2;
          break;
      case '-':
          resultado = valor1 - valor2;
          break;
      case '*':
          resultado = valor1 * valor2;
          break;
      case '/':
          if (valor2 !== 0) {
              resultado = valor1 / valor2;
          } else {
              resultado = "Divisão por zero não é permitida.";
          }
          break;
      default:
          console.log("Operação inválida");
          return;
  }

  console.log(`Resultado da operação ${valor1} ${operacao} ${valor2} é ${resultado}`);
}


exibirMensagem("\nIniciando o programa Calculadora...");
calculadora(6, 3, '+');  // Soma = 9
calculadora(6, 3, '-');  // Subtração = 3
calculadora(6, 3, '*');  // Multiplicação = 18
calculadora(6, 3, '/');  // Divisão = 2
calculadora(6, 0, '/');  // Divisão por zero não é permitida
calculadora(6, 2, '%');  // Operação inválida



//  Escopo de Função: O escopo de função refere-se à visibilidade das variáveis dentro de uma função. 
//                    Variáveis declaradas dentro de uma função são geralmente acessíveis apenas dentro dessa função.

function exemplo() {
    let variavelLocal = 'Apenas dentro da função';
    console.log(variavelLocal);
}

exibirMensagem("\nEscopo de função...");
exemplo();
//console.log(variavelLocal); // Isso resultaria em um erro, pois a variavelLocal não está definida fora da função.



exibirMensagem("\nEscopo de função letra y...");
let y = 10;

function imprimir() {
  let y = 150;
  console.log(y);
}

imprimir();

console.log(y);


exibirMensagem("\nEscopo de função letra x...");
let x = 10;

if(x > 5) {
  let x = 20;
  x++;
  console.log(x);
}

console.log(x);



//  Escopo Aninhado: O escopo aninhado ocorre quando uma função é definida dentro de outra função. 
//                   A função interna pode acessar variáveis da função externa, mas o inverso não é verdadeiro.

function externa() {

    let variavelExterna = 'Variável Externa';

    function interna() {

        let variavelInterna = 'Variável Interna'; 

        console.log(variavelInterna);
        console.log(variavelExterna);
    }

    interna(); 

    //console.log(variavelInterna); // Isso resultaria em um erro, pois a variavelInterna não está definida fora da função interna.
    //console.log(variavelExterna);

}

exibirMensagem("\nEscopo Aninhado...");
externa();

exibirMensagem("\n");




let a = 10;

function multiplicar(x,y) {
  
  let a = x * y;

  if(a > 10) {

    let a = 0;
  //  a = 0;

    a++;

    console.log(a);

  }

  console.log(a);

}

exibirMensagem("\nEscopo Aninhado - Multiplicar...");
console.log(a);
multiplicar(3,7);




//  Arrow Function: Arrow functions são uma forma concisa de escrever funções em JavaScript. 
//  Elas têm uma sintaxe mais curta e compartilham o escopo com o código que as envolve.


exibirMensagem("\n");

function quadrado1(x) {
  return x * x;
}
console.log("Function: " + quadrado1(5)); 

const quadrado2 = (x) => {
  return x * x;
}
console.log("Arrow Function: " + quadrado2(5)); 



exibirMensagem("\n");

function helloWorld1() {
  return "Hello World!";
}
console.log("Function: " + helloWorld1()); 

let helloWorld2 = () => {
  return "Hello World!";
}
console.log("Arrow Function: " + helloWorld2()); 

  

exibirMensagem("\n");

function soma1(a, b) {
  return a + b;
}
console.log("Function: " + soma1(10,20));

let soma2 = (a,b) => {
  return a + b;
}
console.log("Arrow Function: " + soma2(10,20));

exibirMensagem("\n");

  
//  Arrow Function (Sintaxe Alternativa): Quando há apenas um parâmetro, os parênteses podem ser omitidos. 
//                                        Se a função tiver apenas uma expressão, as chaves e a palavra-chave return também podem ser omitidas.


exibirMensagem("\n");

function quadrado3(x) {
  return x * x;
}
console.log("Function: " + quadrado3(5)); 

const quadrado4 = x => x * x;
console.log("Arrow Function: " + quadrado4(5)); 



exibirMensagem("\n");

function helloWorld3() {
  return "Hello World!";
}
console.log("Function: " + helloWorld3()); 

let helloWorld4 = () => "Hello World!";
console.log("Arrow Function: " + helloWorld4()); 


exibirMensagem("\n");

function soma3(a, b) {
  return a + b;
}
console.log("Function: " + soma3(10,20));

let soma4 = (a,b) => a + b;
console.log("Arrow Function: " + soma4(10,20));

exibirMensagem("\n");
  



//  Função com Argumento Opcional: Você pode definir parâmetros opcionais em uma função atribuindo-lhes um valor padrão. 
//                                 Isso permite que você chame a função com ou sem esses parâmetros.

function BoasVindas(nome = 'Visitante') {
    console.log(`Olá, ${nome}!`);
}

exibirMensagem("\n");

BoasVindas(); 
BoasVindas('João'); 

exibirMensagem("\n");



function BoasVindas2(nome = 'Visitante', idade) {
  if(idade === undefined) {
    console.log(`Olá, ${nome}!`);
  } else {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`); 
  }
}

BoasVindas2();
BoasVindas2("Mariana");
BoasVindas2("Ana Luiza", 20);

exibirMensagem("\n");


function soma(a,b) {

  if(a === undefined || b === undefined) {
    return "Esta função precisa ter os dois argumentos";
  } else {
    return a + b;
  }

}

console.log(soma(1));
console.log(soma(1,2));


// Função com Argumento Padrão: Similar ao exemplo anterior, onde os argumentos podem ter valores padrão. 
//                              Proporcionando um comportamento padrão para a função caso um valor não seja fornecido.


  function potencia(base, exp=2) {
    return Math.pow(base, exp);
  }
  exibirMensagem("\n");

  console.log(potencia(2));  
  console.log(potencia(2,2));
  
  exibirMensagem("\n");

  console.log(potencia(3));  
  console.log(potencia(3,2));
  console.log(potencia(3,3));
  
  

//  Função Closure: Closure é a capacidade de uma função lembrar e acessar seu contexto de criação, mesmo quando a função é chamada fora desse contexto.


function externa() {
    let mensagem = 'Olá Mundo!';

    function interna() {
        console.log(mensagem);
    }

    return interna;
}

exibirMensagem("\n");

const funcaoClosure = externa();
funcaoClosure();

exibirMensagem("\n");



function lembrarSoma(x = 2) {
  return function(y = 2) {
    return x + y;
  }
}

let somar1 = lembrarSoma(5);
console.log("Somar1 = " + somar1(3));

exibirMensagem("\n");

let somar2 = lembrarSoma();
console.log("Somar2 = " + somar2());

exibirMensagem("\n");


function contador(i = 1, j = 1) {
  let cont = i;
  let somarContador = function() {
    console.log(cont);
    cont += j ;
  }
  return somarContador;
}

exibirMensagem("\n");

let meuContador = contador(2, 2);
meuContador();
meuContador();
meuContador();


exibirMensagem("\n");
let meuContador2 = contador();
meuContador2();
meuContador2();
meuContador2();




//  Função Recursiva: Uma função recursiva é uma função que chama a si mesma. 
//                    É uma técnica útil para resolver problemas que podem ser divididos em subproblemas menores.



function fatorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

exibirMensagem("\nFatorial:");
console.log(fatorial(4)); 



function recursao(n) {

  if(n - 1 < 2) {
    console.log("Recursão parou");
  } else if(n % 2 != 0) {
    console.log("Número ímpar " + n);
    recursao(n - 1)
  } else {
    console.log("Número par " + n);
    recursao(n - 2);
  }

}

exibirMensagem("\nRecursao:");
recursao(5);

exibirMensagem("\nRecursao:");
recursao(8);



function exibirMensagem(msg) {
  console.log(msg);
}

//  Método rest:  O operador rest (...) é usado para representar um número indefinido de argumentos como um array.

function imprimirNumeros(...argumentos) {
  for(let i = 0; i < argumentos.length; i++) {
    console.log(argumentos[i]);
  }
}

console.log("\nMétodos no Array: rest");
imprimirNumeros( 10, 30, 15, 45, 100);

console.log("\nMétodos no Array: rest");
imprimirNumeros( 5, 15, 23);

function somar(...numeros) {
  let soma = 0;
  for(let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

console.log("\nMétodos no Array: rest");
console.log(somar(1, 2, 3, 4, 5));


/*

ATIVIDADES

1. Utilizando função: Crie um programa que leia um valor inicial A e exiba a sequência de valores do cálculo de A! e o seu resultado. 
	Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 

2. Utilizando função: Crie um programa que leia a largura e o comprimento de um terreno 
retangular, calculando e mostrando a sua área em m² (largura x comprimento). 
O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
- Abaixo de 100m² = TERRENO POPULAR 
- Entre 100m² e 500m² = TERRENO MASTER 
- Acima de 500m² = TERRENO VIP

3. Utilizando função: Tendo como dados de entrada o peso (em quilogramas)
   e a altura (em metros) de uma pessoa, 
   crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. 
Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). 
Classifique o IMC da seguinte forma:
- IMC < 18,5 Kg/m²: Abaixo do Peso
- IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Ideal
- IMC >= 25 Kg/m² e < 29,9 Kg/m²: Excesso de Peso
- IMC >= 30 Kg/m²: Obesidade
  
*/
