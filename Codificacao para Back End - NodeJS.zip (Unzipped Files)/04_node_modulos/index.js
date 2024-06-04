 /*
  * Exemplo com Calculadora Básica
  */

 // Importa o módulo "calculadora" que contém as funções relacionadas a operações matemáticas
 var calculadora = require("./calculadora");

 // Declaração de variáveis para valores a serem usados nas operações
 var valor1, valor2;

 // Atribuição de valores às variáveis
 valor1 = 50;
 valor2 = 10;

 // Exibe a descrição da calculadora no console
 console.log("\n" + calculadora.descricao);

 // Atualiza a descrição da calculadora adicionando uma informação ao final
 calculadora.descricao += "\nDesenvolvida por Jonatan Eugenio!\n";

 // Exibe a descrição atualizada da calculadora no console
 console.log("\n" + calculadora.descricao);

 // Executa as operações matemáticas e exibe os resultados no console
 console.log("Resultado Soma = " + calculadora.somar(valor1, valor2));
 console.log("Resultado Subtracao = " + calculadora.subtrair(valor1, valor2));
 console.log("Resultado Multiplicacao = " + calculadora.multiplicar(valor1, valor2));
 console.log("Resultado Divisao = " + calculadora.dividir(valor1, valor2));


 /*
  * Exemplo com Calculadora de IMC
  */


// Importa o módulo "calculadora" que contém as funções relacionadas a operações matemáticas
const calculadoraIMC = require("./calculadora_imc");

// Declaração de variáveis para valores a serem usados nas operações
let peso, altura;

// Atribuição de valores às variáveis
peso = 80;
altura = 1.8;

// Atualiza a descrição da calculadora adicionando uma informação ao final
calculadoraIMC.descricao += "\nDesenvolvida por Jonatan Eugenio!\n";

// Exibe a descrição atualizada da calculadora no console
console.log("\n" + calculadoraIMC.descricao);

// Executa as operações matemáticas e exibe os resultados no console
const retornoIMC = calculadoraIMC.calcularIMC(peso, altura);

if (retornoIMC.status) {
  console.log("IMC Cálculo = " + retornoIMC.calculo.toFixed(2));
  console.log("IMC Classificação = " + retornoIMC.classificacao);
  console.log("Resultado:\n" + retornoIMC.resultado);
} else {
  console.log("Ocorreu algum problema:\n" + retornoIMC.resultado);
}

/*

ATIVIDADES

 1. Crie um programa que leia o número de fornecedores a serem cadastrados.  
    Após isso, o programa deve ler os dados desses fornecedores: 
    nome, sobrenome, CNPJ (14 digitos), sexo (M-Masculino, F-Feminino, O-Outros), data de nascimento, 
    endereço (Logradourdo, Número, Bairro, CEP, Municipio e Estado) e telefone ((032) 00000-0000) 
    e exiba no console todas as informações desses fornecedores.

  2. Em uma clínica veterinária, é necessário efetuar o cadastro de pets. 
     Crie um programa que leia os dados desses pets, sendo um cachorro e um gato.  
     Os dados são: nome, sexo, nome do dono(a), telefone do dono(a), raça, cor, idade, peso e altura. 
     No final exiba no console todas as informações desses pets.

*/