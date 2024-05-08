/*

//  Strict Mode:
//  O modo estrito ('use strict') é uma funcionalidade do JavaScript que introduz um conjunto 
//  mais restrito de regras para evitar práticas de programação propensas a erros. 
//  Ele é ativado adicionando a declaração 'use strict'; no início de um script ou de uma função

//  'use strict';

// Se tentar atribuir valor a uma variável não declarada, isso resultará em um erro em modo estrito
x = 10; // Erro: "x is not defined"
console.log("\nStrict Mode:");
console.log(x);

function teste() {
// 'use strict';
  testando = "teste"; // Erro: "teste is not defined"
  console.log("\nStrict Mode:");
  console.log(testando);
} 

teste();


//  Exception (Exceção):
//  Uma exceção é um objeto que representa uma anomalia durante a execução do programa. 
//  As exceções são lançadas quando ocorrem erros.

function BoasVindas(nome) {
  // Verificando se o tipo de 'nome' não é uma string
  if (typeof nome != "string") {
    //Se o tipo de nome não for uma string, gera uma exceção (Error) com uma mensagem indicando que o parâmetro nome precisa ser uma string.
    throw new Error("o parâmetro nome precisa ser uma string");
  } else {
    // Se 'nome' for uma string, exibe uma saudação no console usando o template string
    console.log(`Olá ${nome}.`);
  }
}

BoasVindas("Matheus");
BoasVindas(5);

function arrayPreenchido(arr) {
  if (arr.length == 0) {
    throw new Error("O array precisa ter pelo menos um elemento");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}

function arrayVazio(arr) {
  if (arr.length > 0) {
    throw Error("O array não pode ter elementos");
  } else {
    console.log("Agora deu certo");
  }
}

let arr = [1, 2, 3, 4, 5];
arrayPreenchido(arr);
let arr = [];
arrayVazio(arr);





//  Try-Catch:
//  try e catch são usados para lidar com exceções. 
//  O código dentro do bloco try é executado, e se uma exceção ocorrer, 
// o bloco catch é executado para lidar com a exceção.

console.log("\nTry-Catch");
try {
    // Código que pode gerar uma exceção
    throw new Error("Isso é uma exceção!");
} catch (e) {    
    //throw new Error(e.message);
    //console.log(e.message);
    console.error("Ocorreu um erro:", e.message);
}


console.log("\nTry-Catch");
//let b = 2;
try {
  let a = 2 + b;
} catch (e) {
  //console.log(e.message);
  //throw new Error(e.message);
  console.error("Ocorreu um erro:", e.message);
}



console.log("\nTry-Catch - exemploFuncao");
function exemploFuncao() {
  let algumaCondicaoInesperada = true;
  if (algumaCondicaoInesperada) {
      throw new Error("Ocorreu um erro devido a alguma condição.");
  } else {
      console.log("OK.");
  }
}

try {
  exemploFuncao();
} catch (erro) {
  //console.log(erro.message);
  //throw new Error(erro.message);
  console.error("Ocorreu um erro:", erro.message);
}



//  Try-Catch: Finally
//  O bloco finally é usado em conjunto com try-catch e contém código que será executado independentemente de ocorrer uma exceção ou não.


console.log("\nTry-Catch: Finally");
try {
    // Código que pode gerar uma exceção
    throw new Error("Isso é uma exceção!");
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
} finally {
    console.log("Este bloco é executado independentemente de exceções.");
}



console.log("\nTry-Catch: Finally");
b = 2;
try {
  let a = 2 + b;
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Executou o finally!");
}





//  Assertion (Afirmação):
//  As afirmações são expressões que verificam se uma condição é verdadeira. 
//  Se a condição for falsa, uma exceção pode ser lançada.

let valor = 5;

// Se a afirmação falhar, uma mensagem será exibida no console
console.assert(valor == 10, "O valor deve ser 10");




//  Tratamento de Input:
//  Refere-se à prática de validar e processar dados fornecidos pelo usuário 
//  para evitar problemas como injeção de código malicioso ou erros inesperados.

//  isNaN: A função isNaN verifica se um valor não é um número.
//  Retorna true se o valor não for um número e false se for.

let inputDoUsuario = prompt("Digite um número:");

if (isNaN(inputDoUsuario)) {
  console.log("Entrada inválida. Por favor, digite um número.");
} else {
  console.log("Você digitou o número: " + inputDoUsuario);
}




function checarNumero(num) {
  try {
    let number = Number(num);
    if (Number.isNaN(number)) {
      throw new Error("Ocorreu um erro. Por favor, passe só números para o programa");
    } else {
      console.log("Você digitou o número: " + number);
    }
  } catch (e){
    console.error(e.message);
  }
 
}

checarNumero(5);
checarNumero("sadh");

//let number = prompt("Digite um número");
//checarNumero(number);


*/

/*

ATIVIDADES

1. Utilizando tratamento de erros: Crie um programa que receba dois números como parâmetros e retorna a divisão do primeiro pelo segundo.
Use try-catch para lidar com o caso em que o segundo número é zero 
e imprima uma mensagem de erro (gere uma exceção) apropriada.

2. Utilizando tratamento de erros: Crie um programa que receba um array de números e um índice como argumentos e retorna o elemento do array no índice especificado. 
Utilize try-catch para lidar com o caso em que o índice fornecido está fora dos limites do array 
e imprima uma mensagem de erro (gere uma exceção) apropriada.
  
3. Utilizando tratamento de erros: Crie um programa que leia os dados de uma pessoa: 
nome, sobrenome, CPF (11 caracteres), sexo (M, F, O), data de nascimento (Formato Data), endereço e telefone.
Valide os dados recebidos e exiba no console. 
Utilize try-catch para lidar com o caso em que os dados não sejam informados no padrão correto 
e imprima uma mensagem de erro (gere uma exceção)  apropriada.
	
4. Utilizando tratamento de erros: Crie um programa que leia a largura e o comprimento de um terreno retangular, 
calculando e mostrando a sua área em m² (largura x comprimento). 
O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
- Abaixo de 100m² = TERRENO POPULAR 
- Entre 100m² e 500m² = TERRENO MASTER 
- Acima de 500m² = TERRENO VIP
Utilize try-catch para lidar com o caso em que os dados (largura e comprimento) não sejam informados no padrão correto 
e imprima uma mensagem de erro (gere uma exceção)  apropriada.
	
5. Utilizando função: Tendo como dados de entrada o peso (em quilogramas)
   e a altura (em metros) de uma pessoa, 
   crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. 
Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). 
Classifique o IMC da seguinte forma:
- IMC < 18,5 Kg/m²: Abaixo do Peso
- IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Ideal
- IMC >= 25 Kg/m² e < 29,9 Kg/m²: Excesso de Peso
- IMC >= 30 Kg/m²: Obesidade
Utilize try-catch para lidar com o caso em que os dados (peso e altura) não sejam informados no padrão correto 
e imprima uma mensagem de erro (gere uma exceção)  apropriada.
  
*/