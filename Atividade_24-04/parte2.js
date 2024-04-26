const prompt = require("prompt-sync")();

//exercicio 1

console.log("----------Exercicio 1 -------------- \n");

for (let i = 0; i <= 50; i++) {
  if (i === 30) {
    break;
  }
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//exercicio 2

console.log("\n ----------Exercicio 2 -------------- \n");

for (let i = 0; i <= 50; i++) {
  if (i === 29) {
    continue;
  }
  if (i % 2 == 0) {
    console.log(i);
  }
}

//exercicio 3

console.log("\n ----------Exercicio 3 -------------- \n");

let numero = parseInt(prompt("Digite um número:"));

if (numero % 2 === 0) {
  console.log(numero + " é um número par.");
} else {
  console.log(numero + " é um número ímpar.");
}

//exercicio 4

console.log("\n ----------Exercicio 4 -------------- \n");

let valorInicial = parseInt(prompt("Digite um valor inicial:"));

let resultadoFatorial = 1;

let sequencia = valorInicial + "! = ";

for (let i = valorInicial; i > 0; i--) {
  resultadoFatorial *= i;
  sequencia += i;
  if (i !== 1) {
    sequencia += " x ";
  }
}

console.log(sequencia + " = " + resultadoFatorial);

//exercicio 5

console.log("\n ----------Exercicio 5 -------------- \n");

let soma = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0 && i % 3 === 0) {
    soma += i;
  }
}
console.log(
  "A soma dos números ímpares múltiplos de três de 1 até 100 é: " + soma
);

//exercicio 6

console.log("\n ----------Exercicio 6 -------------- \n");

let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

let menor, meio, maior;

if (A <= B && A <= C) {
  menor = A;
  if (B <= C) {
    meio = B;
    maior = C;
  } else {
    meio = C;
    maior = B;
  }
} else if (B <= A && B <= C) {
  menor = B;
  if (A <= C) {
    meio = A;
    maior = C;
  } else {
    meio = C;
    maior = A;
  }
} else {
  menor = C;
  if (A <= B) {
    meio = A;
    maior = B;
  } else {
    meio = B;
    maior = A;
  }
}

console.log(
  "Valores em ordem crescente: " + menor + ", " + meio + ", " + maior
);
console.log(
  "Valores em ordem decrescente: " + maior + ", " + meio + ", " + menor
);

//exercicio 7

console.log("\n ----------Exercicio 7 -------------- \n");

let a = parseInt(prompt("Digite o valor de A:"));
let b = parseInt(prompt("Digite o valor de B:"));

let c;

if (a === b) {
  c = a + b;
} else {
  c = a * b;
}

console.log("C = " + c);

//exercicio 8

console.log("\n ----------Exercicio 8 -------------- \n");

let nomeAluno = prompt("Digite o nome do aluno:");
let matriculaAluno = prompt("Digite a matrícula do aluno:");
let disciplina = prompt("Digite a disciplina:");
let notaAluno = parseFloat(prompt("Digite a nota do aluno:"));

if (notaAluno >= 60) {
  console.log("Situação do aluno " + nomeAluno + ": Aprovado em " + disciplina);
} else if (notaAluno >= 50) {
  console.log(
    "Situação do aluno " + nomeAluno + ": Em recuperação em " + disciplina
  );
} else {
  console.log(
    "Situação do aluno " + nomeAluno + ": Reprovado em " + disciplina
  );
}

//exercicio 9

console.log("\n ----------Exercicio 9 -------------- \n");
 