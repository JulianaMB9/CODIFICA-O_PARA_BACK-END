//Exercicio1 - Crie um programa que exiba no console uma mensagem
//digitada pelo usuário.
const prompt = require("prompt-sync")();

console.log("Exercicio 1 \n");

let mensagem = prompt("Digite uma mensagem: ");

console.log(mensagem);

//exercicio 2- Crie um programa que leia o nome de uma pessoa e mostre
//uma mensagem de boas-vindas para ela.
console.log("Exercicio 2 \n");
let nome = prompt("Digite seu nome: ");

console.log("Seja bem-vindo (a)," + nome);

//exercicio3 -
console.log("Exercicio 3 \n");
let matricula = prompt("Digite a matrícula do aluno:");
let nomeAluno = prompt("Digite o nome do aluno:");
let sobrenome = prompt("Digite o sobrenome do aluno:");
let cpf = prompt("Digite o CPF do aluno:");
let sexo = prompt("Digite o sexo do aluno:");
let dataNascimento = prompt(
  "Digite a data de nascimento do aluno (no formato dd/mm/aaaa):"
);
let endereco = prompt("Digite o endereço do aluno:");
let telefone = prompt("Digite o telefone do aluno:");

console.log("Matrícula: " + matricula);
console.log("Nome completo: " + nomeAluno + " " + sobrenome);
console.log("CPF: " + cpf);
console.log("Sexo: " + sexo);
console.log("Data de nascimento: " + dataNascimento);
console.log("Endereço: " + endereco);
console.log("Telefone: " + telefone);

//exercicio4-
console.log("Exercicio 4 \n");
let disciplina = prompt("Digite o nome da disciplina:");
let aluno = prompt("Digite o nome do aluno:");
let somaNotas = 0;

for (let i = 1; i <= 4; i++) {
  let nota = parseFloat(
    prompt("Digite a nota " + i + " do aluno na disciplina " + disciplina + ":")
  );
  somaNotas += nota;
}

let media = somaNotas / 4;

console.log(
  "A média do aluno " + aluno + " na disciplina " + disciplina + " é: " + media
);

//Exercicio5
console.log("Exercicio 5 \n");
let numero = parseInt(prompt("Digite o numero que deseja exibir a tabuada:"));

for (let i = 0; i < 10; i++) {
  console.log(numero + "x" + (i + 1) + " = " + numero * (i + 1));
}

//exercicio 6
console.log("Exercicio 6 \n");
let nomeFun = prompt("Digite o nome do funcionário: ");
let salarioFun = parseFloat(prompt("Digite o salário do funcionário: "));

console.log("Funcionário: " + nomeFun + " Salário: " + salarioFun);

//Exercicio 7
console.log("Exercicio 7 \n");
let somaNum = 0;
for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt("Digite um numero"));
  somaNum += num;
}

console.log("o somatório dos numeros é: " + somaNum);

//Exercicio 8
console.log("Exercicio 8 \n");
let anos = parseInt(prompt("Digite a idade em anos:"));
let meses = parseInt(prompt("Digite a idade em meses:"));
let dias = parseInt(prompt("Digite a idade em dias:"));

let idadeEmDias = anos * 365 + meses * 30 + dias;

console.log("A idade expressa apenas em dias é: " + idadeEmDias + " dias.");

//Exercicio 9
console.log("Exercicio 9 \n");
let idadeDias = parseInt(prompt("Digite a idade em dias:"));

let anoss = Math.floor(idadeDias / 365);
let mesess = Math.floor((idadeDias % 365) / 30);
let diass = idadeDias % 30;

console.log("A idade expressa em anos, meses e dias é:");
console.log("Anos: " + anoss);
console.log("Meses: " + mesess);
console.log("Dias: " + diass);

//Exercicio 10
console.log("Exercicio 10 \n");
let horas = parseInt(prompt("Digite as horas:"));
let minutos = parseInt(prompt("Digite os minutos:"));
let segundos = parseInt(prompt("Digite os segundos:"));

let tempoTotalEmSegundos = horas * 3600 + minutos * 60 + segundos;

console.log(
  "O tempo de duração da atividade em segundos é: " +
    tempoTotalEmSegundos +
    " segundos."
);

//Exercicio 11
console.log("Exercicio 11 \n");
let tempoEmSegundos = parseInt(
  prompt("Digite o tempo de duração da atividade em segundos:")
);

let horass = Math.floor(tempoEmSegundos / 3600);
let minutoss = Math.floor((tempoEmSegundos % 3600) / 60);
let segundoss = tempoEmSegundos % 60;

console.log("O tempo de duração da atividade é:");
console.log("Horas: " + horas);
console.log("Minutos: " + minutos);
console.log("Segundos: " + segundos);

//Exercico 12
console.log("Exercicio 12 \n");
let precoProduto = parseFloat(prompt("Digite o preço do produto:"));

let precoPromocional = precoProduto - precoProduto * 0.15;

console.log("Preço do produto: R$ " + precoProduto);
console.log("Preço promocional com 15% de desconto: R$ " + precoPromocional);

//Exercicio 13
console.log("Exercicio 13 \n");
let salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário:"));

let novoSalario = salarioAtual + (salarioAtual * 0.275);

console.log("Salário atual do funcionário: R$ " + salarioAtual);
console.log("Novo salário com aumento: R$ " + novoSalario);

//Exercicio 14 
console.log("Exercicio 14 \n");
let valorMatricula = parseFloat(prompt("Digite o valor da matrícula do curso:"));
let novoValorMatricula = valorMatricula - (valorMatricula * 0.20);

console.log("Valor da matrícula do curso: R$ " + valorMatricula);
console.log("Novo valor da matrícula com desconto: R$ " + novoValorMatricula);

//Exercicio 15 
console.log("Exercicio 15 \n");
let valorBoleto = parseFloat(prompt("Digite o valor do boleto:"));
let diasAtraso = parseInt(prompt("Digite a quantidade de dias em atraso:"));
let taxaDiaria = 0.0125; 

let novoValorBoleto = valorBoleto + (valorBoleto * taxaDiaria * diasAtraso);

console.log("Valor do boleto original: R$ " + valorBoleto);
console.log("Novo valor do boleto com " + diasAtraso +" dias de atraso e taxa de 1,25% ao dia: R$ " + novoValorBoleto);
