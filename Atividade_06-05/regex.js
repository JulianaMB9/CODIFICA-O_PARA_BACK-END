const prompt = require("prompt-sync")();

console.log("---------- Exercício 1 -------------- \n");

function validarCPF(cpf) {
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

function validarTelefone(telefone) {
  const telefoneRegex = /^\(\d{2}\) \d \d{4}-\d{4}$/;
  return telefoneRegex.test(telefone);
}

function validarDataNasc(dataNasc) {
  const dataNascRegex = /^\d{2}-\d{2}-\d{2}$/;
  return dataNascRegex.test(dataNasc);
}

function exibirDadosAluno(aluno) {
  console.log("Nome completo:", aluno.nome, aluno.sobrenome);
  console.log("CPF:", aluno.cpf);
  console.log("Sexo:", aluno.sexo);
  console.log("Data de nascimento:", aluno.dataNascimento);
  console.log("Endereço:", aluno.endereco);
  console.log("Telefone:", aluno.telefone);
}

let aluno = {};

aluno.nome = prompt("Digite o nome do aluno: ");
aluno.sobrenome = prompt("Digite o sobrenome do aluno: ");
aluno.cpf = prompt("Digite o CPF do aluno (formato: 000.000.000-00): ");
aluno.sexo = prompt("Digite o sexo do aluno (M-Masculino, F-Feminino, O-Outros): ");
aluno.dataNascimento = prompt("Digite a data de nascimento do aluno (formato: DD-MM-AA): ");
aluno.endereco = prompt("Digite o endereço do aluno: ");
aluno.telefone = prompt("Digite o telefone do aluno (formato: (00) 0 0000-0000): ");

let erros = [];

if (!validarCPF(aluno.cpf)) {
  erros.push("CPF inválido. Por favor, insira no formato correto: 000.000.000-00");
}

if (!validarTelefone(aluno.telefone)) {
  erros.push("Telefone inválido. Por favor, insira no formato correto: (00) 0 0000-0000");
}

if (!validarDataNasc(aluno.dataNascimento)) {
  erros.push("Data de Nascimento inválida. Por favor, insira no formato correto: DD-MM-AA");
}

if (erros.length > 0) {
    console.log("Erros de validação:");
    for (let i = 0; i < erros.length; i++) {
      console.log(erros[i]);
    }
  } else {
    exibirDadosAluno(aluno);
  }

console.log("---------- Exercício 2 -------------- \n");

function validarNome(nome) {
    const nomeRegex = /^[a-zA-ZÀ-ÿ\s']+$/; 
    return nomeRegex.test(nome);
}

function validarNota(nota) {
    const notaRegex =  /^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/; 
    return notaRegex.test(nota);
}

function calcularMediaEVerificarAprovacao(nome, nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    console.log("Nome do aluno:", nome);
    console.log("Nota 1:", nota1);
    console.log("Nota 2:", nota2);
    console.log("Média:", media.toFixed(2));
    if (media >= 60) {
        console.log("Situação: Aprovado\n");
    } else {
        console.log("Situação: Reprovado\n");
    }
}

const numAlunos = parseInt(prompt("Digite o número de alunos na turma: "));
console.log("\n");

for (let i = 1; i <= numAlunos; i++) {
    console.log("Aluno " + i + ":");
    const nome = prompt("Digite o nome do aluno: ");
    const nota1 = parseFloat(prompt("Digite a nota da avaliação 1: "));
    const nota2 = parseFloat(prompt("Digite a nota da avaliação 2: "));
    console.log("\n");

    let validar = [];

    if (!validarNome(nome)) {
        validar.push("Nome inválido. Por favor, insira no formato correto");
    }
    
    if (!validarNota(nota1)) {
        validar.push("Nota 1 inválida. Por favor, insira no formato correto: Ex: 10.00");
    }
    
    if (!validarNota(nota2)) {
        validar.push("Nota 2 inválida. Por favor, insira no formato correto: Ex: 10.00");
    }
    
    if (validar.length > 0) {
        console.log("Erros de validação:");
        for (let j = 0; j < validar.length; j++) {
            console.log(validar[j]);
        }
    } else {
        calcularMediaEVerificarAprovacao(nome, nota1, nota2);
    }
}


console.log("---------- Exercício 3 -------------- \n");


let pessoas = [];

function validarSexo(sexo) {
    const sexoRegex = /^[MFPO]$/; 
    return sexoRegex.test(sexo);
}

function validarEstadoCivil(estadoCivil) {
    const estadoCivilRegex = /^[CSV]$/; 
    return estadoCivilRegex.test(estadoCivil);
}

function calcularMediaIdade() {
    const totalIdades = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);
    return totalIdades / pessoas.length;
}

function encontrarPessoaMaisVelha() {
    return pessoas.reduce((max, pessoa) => (pessoa.idade > max.idade ? pessoa : max), pessoas[0]);
}


function encontrarPessoaMaisNova() {
    return pessoas.reduce((min, pessoa) => (pessoa.idade < min.idade ? pessoa : min), pessoas[0]);
}

    for (let i = 1; i <= 10; i++) {
        console.log("Pessoa " + i + ":");

        let nome = prompt("Digite o nome: ");
        let sexo, idade, estadoCivil;

        do {
            sexo = prompt("Digite o sexo (M-Masculino, F-Feminino, P-Prefiro não dizer, O-Outros): ");
            if (!validarSexo(sexo)) {
                console.log("Sexo inválido. Por favor, digite novamente.");
            }
        } while (!validarSexo(sexo));

        idade = parseInt(prompt("Digite a idade: "));

        do {
            estadoCivil = prompt("Digite o estado civil (C-Casado(a), S-Solteiro(a), V-Viúvo(a)): ");
            if (!validarEstadoCivil(estadoCivil)) {
                console.log("Estado civil inválido. Por favor, digite novamente.");
            }
        } while (!validarEstadoCivil(estadoCivil));

        pessoas.push({ nome, sexo, idade, estadoCivil });
        console.log("\n");
    }

    console.log("------ Resultados ------\n");

    console.log("Média de idade do grupo:", calcularMediaIdade().toFixed(2));

    const somaIdades = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);
    console.log("Soma de todas as idades do grupo:", somaIdades);

    const pessoaMaisVelha = encontrarPessoaMaisVelha();
    console.log("Pessoa mais velha:");
    console.log(pessoaMaisVelha);

    const pessoaMaisNova = encontrarPessoaMaisNova();
    console.log("Pessoa mais nova:");
    console.log(pessoaMaisNova);

    console.log("Pessoas com mais de 20 anos:");
    pessoas.filter(pessoa => pessoa.idade > 20).forEach(pessoa => console.log(pessoa));

    console.log("Pessoas com menos de 10 anos:");
    pessoas.filter(pessoa => pessoa.idade < 10).forEach(pessoa => console.log(pessoa));

    console.log("Pessoas do sexo masculino:");
    pessoas.filter(pessoa => pessoa.sexo === 'M').forEach(pessoa => console.log(pessoa));

    console.log("Pessoas do sexo feminino:");
    pessoas.filter(pessoa => pessoa.sexo === 'F').forEach(pessoa => console.log(pessoa));

    console.log("Pessoas que não quiseram dizer o sexo ou marcaram outros:");
    pessoas.filter(pessoa => pessoa.sexo === 'P' || pessoa.sexo === 'O').forEach(pessoa => console.log(pessoa));

    console.log("Pessoas casadas:");
    pessoas.filter(pessoa => pessoa.estadoCivil === 'C').forEach(pessoa => console.log(pessoa));

    console.log("Pessoas solteiras:");
    pessoas.filter(pessoa => pessoa.estadoCivil === 'S').forEach(pessoa => console.log(pessoa));

    console.log("Pessoas viúvas:");
    pessoas.filter(pessoa => pessoa.estadoCivil === 'V').forEach(pessoa => console.log(pessoa));

