const prompt = require("prompt-sync")();

// console.log("\n----------------- Atividade 1 --------------\n");

// let dimensoes = [];

// dimensoes[0] = prompt('Digite a largura do terreno: ');
// dimensoes[1] = prompt('Digite o comprimento do terreno: ');

// let area = dimensoes[0] * dimensoes[1];

// console.log("A área do terreno é: " + area);

// console.log("\n----------------- Atividade 2 --------------\n");

// let nomesProdutos = [];
// let precoProdutos = [];

// for (let i = 0; i < 8; i++) {
//     let nome = prompt("Digite o nome do produto:");
//     let preco = parseFloat(prompt("Digite o preço do produto:"));

//     nomesProdutos.push(nome);
//     precoProdutos.push(preco);
// }

// let menorPreco = precoProdutos[0];
// let menor = 0;
// for (let i = 1; i < precoProdutos.length; i++) {
//     if (precoProdutos[i] < menorPreco) {
//         menorPreco = precoProdutos[i];
//         menor = i;
//     }
// }


// let maiorPreco = precoProdutos[0];
// let maior = 0;
// for (let i = 1; i < precoProdutos.length; i++) {
//     if (precoProdutos[i] > maiorPreco) {
//         maiorPreco = precoProdutos[i];
//         maior = i;
//     }
// }

// console.log("O produto com o menor preço é:", nomesProdutos[menor], "por R$", menorPreco);
// console.log("O produto com o maior preço é:", nomesProdutos[maior], "por R$", maiorPreco);



// console.log("\n----------------- Atividade 3 --------------\n");


// let nomes = [];
// let idades = [];
// let sexos = [];


// for (let i = 0; i < 5; i++) {
//     let nome = prompt("Digite o nome da pessoa:");
//     let idade = parseInt(prompt("Digite a idade da pessoa:"));
//     let sexo = prompt("Digite o sexo da pessoa (M para masculino, F para feminino):").toUpperCase();

//     nomes.push(nome);
//     idades.push(idade);
//     sexos.push(sexo);
// }

// let contadorHomens = 0;
// for (let i = 0; i < sexos.length; i++) {
//     if (sexos[i] === 'M') {
//         contadorHomens++;
//     }
// }

// let contadorMulheres = 0;
// for (let i = 0; i < sexos.length; i++) {
//     if (sexos[i] === 'F') {
//         contadorMulheres++;
//     }
// }

// let somaIdades = 0;
// for (let i = 0; i < idades.length; i++) {
//     somaIdades += idades[i];
// }
// let mediaIdadeGrupo = somaIdades / idades.length;

// let somaIdadesHomens = 0;
// let contadorHomensEncontrados = 0;
// for (let i = 0; i < sexos.length; i++) {
//     if (sexos[i] === 'M') {
//         somaIdadesHomens += idades[i];
//         contadorHomensEncontrados++;
//     }
// }
// let mediaIdadeHomens = somaIdadesHomens / contadorHomensEncontrados;

// let contadorMulheresMais20Anos = 0;
// for (let i = 0; i < sexos.length; i++) {
//     if (sexos[i] === 'F' && idades[i] > 20) {
//         contadorMulheresMais20Anos++;
//     }
// }

// console.log("a) Quantidade de homens cadastrados:", contadorHomens);
// console.log("b) Quantidade de mulheres cadastradas:", contadorMulheres);
// console.log("c) Média de idade do grupo:", mediaIdadeGrupo.toFixed(2));
// console.log("d) Média de idade dos homens:", mediaIdadeHomens.toFixed(2));
// console.log("e) Quantidade de mulheres com mais de 20 anos:", contadorMulheresMais20Anos);


// console.log("\n----------------- Atividade 4 --------------\n");


// let pesos = [];
// let alturas = [];


// for (let i = 0; i < 7; i++) {
//     let peso = parseFloat(prompt("Digite o peso da pessoa (em kg):"));
//     let altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));

//     pesos.push(peso);
//     alturas.push(altura);
// }


// let somaAlturas = 0;
// for (let i = 0; i < alturas.length; i++) {
//     somaAlturas += alturas[i];
// }
// let mediaAltura = somaAlturas / alturas.length;

// let contadorMais90kg = 0;
// for (let i = 0; i < pesos.length; i++) {
//     if (pesos[i] > 90) {
//         contadorMais90kg++;
//     }
// }

// let contadorMenos50kgMenos160m = 0;
// for (let i = 0; i < pesos.length; i++) {
//     if (pesos[i] < 50 && alturas[i] < 1.60) {
//         contadorMenos50kgMenos160m++;
//     }
// }

// let contadorMais190mMais100kg = 0;
// for (let i = 0; i < pesos.length; i++) {
//     if (alturas[i] > 1.90 && pesos[i] > 100) {
//         contadorMais190mMais100kg++;
//     }
// }

// console.log("a) A média de altura do grupo é:", mediaAltura.toFixed(2), "metros");
// console.log("b) O número de pessoas que pesam mais de 90kg é:", contadorMais90kg);
// console.log("c) O número de pessoas que pesam menos de 50kg e têm menos de 1.60m de altura é:", contadorMenos50kgMenos160m);
// console.log("d) O número de pessoas que medem mais de 1.90m e pesam mais de 100kg é:", contadorMais190mMais100kg);




console.log("\n----------------- Atividade 5 --------------\n");

let aluno = [];

aluno.push(prompt("Digite a matrícula do aluno:"));
aluno.push(prompt("Digite o nome completo do aluno:"));
aluno.push(prompt("Digite o nome do curso do aluno:"));

let disciplinas = [];
let notas = [];


for (let i = 0; i < 5; i++) {
    let disciplina = prompt("Digite o nome da disciplina " + (i + 1) + ":");
    let nota = parseFloat(prompt("Digite a nota da disciplina " + (i + 1) + ":"));
    disciplinas.push(disciplina);
    notas.push(nota);
}

aluno.push(disciplinas);
aluno.push(notas);

let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}
let mediaNotas = somaNotas / notas.length;

// console.log(aluno);

console.log("A média do aluno(a) "+ aluno[1]+" no curso de "+ aluno[2]+ " é: ", mediaNotas.toFixed(2));


