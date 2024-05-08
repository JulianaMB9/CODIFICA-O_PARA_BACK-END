const prompt = require("prompt-sync")();

console.log("\n----------------- Atividade 1 --------------\n");

let usuario = {};

usuario.nome = prompt("Digite o nome:");
usuario.sobrenome = prompt("Digite o sobrenome:");
usuario.cpf = prompt("Digite o CPF:");
usuario.sexo = prompt("Digite o sexo:");
usuario.dataNascimento = prompt("Digite a data de nascimento:");
usuario.endereco = prompt("Digite o endereço:");
usuario.telefone = prompt("Digite o telefone:");

console.log("\nDados do usuário:");
console.log("Nome: " + usuario.nome);
console.log("Sobrenome: " + usuario.sobrenome);
console.log("CPF: " + usuario.cpf);
console.log("Sexo: " + usuario.sexo);
console.log("Data de Nascimento: " + usuario.dataNascimento);
console.log("Endereço: " + usuario.endereco);
console.log("Telefone: " + usuario.telefone);

console.log("\n----------------- Atividade 2 --------------\n");

let aluno = {};

aluno.nome = prompt("Digite o nome do aluno:");
aluno.matricula = prompt("Digite a matrícula do aluno:");
aluno.disciplina = prompt("Digite a disciplina:");
aluno.nota = parseFloat(prompt("Digite a nota do aluno:"));

if (aluno.nota >= 60) {
  aluno.situacao = "Aprovado";
} else if (aluno.nota >= 50) {
  aluno.situacao = "Em recuperação";
} else {
  aluno.situacao = "Reprovado";
}

console.log("\nDados do aluno:");
console.log("Nome:" + aluno.nome);
console.log("Matrícula:" + aluno.matricula);
console.log("Disciplina:" + aluno.disciplina);
console.log("Nota:" + aluno.nota);
console.log("Situação:" + aluno.situacao);
