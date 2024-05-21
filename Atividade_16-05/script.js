/*

ATIVIDADES

1. Crie um programa que leia os dados de um usuário: 
   nome, sobrenome, CPF (11 digitos), sexo (M-Masculino, F-Feminino, O-Outros), data de nascimento, endereço e telefone 
   e exiba todas as informações desse usuário.

2. Crie um programa que leia os dados de um aluno: nome, matrícula, disciplina, nota. 
   - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
   - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
   exiba no console “Em recuperação” 
   - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
   criar nova propriedade chamada situacao para o aluno.

3. Crie um programa que leia o nome e o preço de produtos e exiba as informações desse produto.


*/
const prompt = require("prompt-sync")();

// class Usuario {
//   constructor(nome, sobrenome, cpf, sexo, dataNascimento, endereco, telefone) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.cpf = cpf;
//     this.sexo = sexo;
//     this.dataNascimento = dataNascimento;
//     this.endereco = endereco;
//     this.telefone = telefone;
//   }

//   exibirInformacoes() {
//     console.log("Nome compconsto:", this.nome, this.sobrenome);
//     console.log("CPF:", this.cpf);
//     console.log("Sexo:", this.sexo);
//     console.log("Data de Nascimento:", this.dataNascimento);
//     console.log("Endereço:", this.endereco);
//     console.log("Telefone:", this.telefone);
//   }
// }

// const nome = prompt("Digite o nome:");
// const sobrenome = prompt("Digite o sobrenome:");
// const cpf = prompt("Digite o CPF (11 dígitos):");
// const sexo = prompt("Digite o sexo (M-Masculino, F-Feminino, O-Outros):");
// const dataNascimento = prompt("Digite a data de nascimento (YYYY-MM-DD):");
// const endereco = prompt("Digite o endereço:");
// const telefone = prompt("Digite o telefone:");

// const pessoa1 = new Usuario(
//   nome,
//   sobrenome,
//   cpf,
//   sexo,
//   dataNascimento,
//   endereco,
//   telefone
// );
// pessoa1.exibirInformacoes();

// class Aluno {
//   constructor(nome, matricula, disciplina, nota) {
//     this.nome = nome;
//     this.matricula = matricula;
//     this.disciplina = disciplina;
//     this.nota = nota;
//     this.situacao = this.calcularSituacao();
//   }

//   calcularSituacao() {
//     if (this.nota >= 60) {
//       return "Aprovado";
//     } else if (this.nota >= 50) {
//       return "Em recuperação";
//     } else {
//       return "Reprovado";
//     }
//   }
// }

// const nome = prompt("Digite o nome do aluno:");
// const matricula = prompt("Digite a matrícula do aluno:");
// const disciplina = prompt("Digite a disciplina:");
// const nota = parseFloat(prompt("Digite a nota do aluno:"));

// const aluno1 = new Aluno(nome, matricula, disciplina, nota);
// console.log("Situação:", aluno1.situacao);

class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }

    exibirInformacoes() {
      console.log("Nome:", this.nome);
      console.log("Preço:", this.preco);
    }
  }


const nomeProduto = prompt("Digite o nome do produto:");
const precoProduto = parseFloat(prompt("Digite o preço do produto:"));

const produto1 = new Produto(nomeProduto, precoProduto);
produto1.exibirInformacoes();
