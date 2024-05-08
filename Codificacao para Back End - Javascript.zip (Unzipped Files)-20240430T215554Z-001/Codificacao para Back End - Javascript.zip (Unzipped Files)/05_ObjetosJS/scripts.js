
//  Objetos
//  Objetos são estruturas de dados que representam conjuntos de pares chave-valor. 
//  Cada chave (ou propriedade) está associada a um valor. 
//  Os objetos podem armazenar diferentes tipos de dados, incluindo funções, arrays e outros objetos.

let objeto_vazio = {};

console.log("\nObjeto Vazio:");
console.log(objeto_vazio);

let pessoa = {
  nome: "Jonatan",
  idade: 29,
  profissao: "Programador",
  cidade: "Cataguases",
  boasVindas: function () {
    console.log(`Olá, meu nome é ${this.nome} e eu moro em ${this.cidade}.`);
  }

};
 
console.log("\nObjeto Pessoa:");
console.log(pessoa);

pessoa.nome = prompt("Digite o nome da pessoa: ");
pessoa.idade = prompt("Digite a idade da pessoa: ");
pessoa.profissao = prompt("Digite a profissao da pessoa: ");
pessoa.cidade = prompt("Digite a cidade da pessoa: ");

console.log("\nObjeto Pessoa - Notação por Ponto:");
console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Profissao: " + pessoa.profissao);
console.log("Cidade: " + pessoa.cidade);
pessoa.boasVindas();

console.log("\nObjeto Pessoa - Notação por Colchete:");
console.log("Nome: " + pessoa['nome']);
console.log("Idade: " + pessoa['idade']);
console.log("Profissao: " + pessoa['profissao']);
console.log("Cidade: " + pessoa['cidade']);
console.log("Boas Vindas: " + pessoa['boasVindas']);


let cachorro = {
  patas: 4,
  nome: 'Pitoco',
  latir: function () {
    console.log("Au Au!");
  }
};

console.log("\nObjeto Cachorro:");
console.log("Patas: " + cachorro.patas);
console.log("Nome: " + cachorro.nome);
cachorro.latir();



// delete em Objetos: O operador delete é usado para remover uma propriedade de um objeto.

pessoa = {
  nome: "Jonatan",
  idade: 29,
  profissao: "Programador",
  cidade: "Cataguases",
};

console.log("\ndelete em Objetos:");
console.log(pessoa.nome); 
delete pessoa.nome;
console.log(pessoa.nome);  //Undefined - Não existe mais  
console.log(pessoa);


//  Nova Propriedade de Objeto: Você pode criar uma nova propriedade para um objeto atribuindo um valor a 
//  uma chave que ainda não existe.

pessoa = {};

console.log("\nNova Propriedade de Objeto:");
console.log(pessoa);

pessoa.nome = prompt("Digite o nome da pessoa: ");
pessoa.idade = parseInt(prompt("Digite a idade da pessoa: "));
pessoa.profissao = prompt("Digite a profissao da pessoa: ");
pessoa.cidade = prompt("Digite a cidade da pessoa: ");
pessoa.estadoCivil = prompt("Digite o estado civil da pessoa: ");

console.log(pessoa);



//  Object.assign:  O método Object.assign é utilizado para copiar o valor de todas as propriedades enumeráveis
//                  de um ou mais objetos de origem para um objeto de destino.

let carro = {
  portas: 2,
  portamalas: '200l',
  motor: '2.0'
}

console.log("\nObjeto Carro:");
console.log(carro);

let adicionais1 = {
  tetosolar: true,
  arcondicionado: true,
}

let adicionais2 = {
  alarme: true,
  airbag: true,
}



console.log("\nObjeto Carro:");
Object.assign(carro, adicionais1, adicionais2);


console.log("\nObjeto Carro:");
console.log(carro);
console.log("Teto Solar: " + carro.tetosolar);
console.log("Ar Condicionado: " + carro.arcondicionado);
console.log("Alarme: " + carro.alarme);
console.log("AirBag: " + carro.airbag);


console.log("\nObjeto Adicionais 1:");
console.log(adicionais1);

console.log("\nObjeto Adicionais 2:");
console.log(adicionais2);


// Object.keys: O método Object.keys retorna um array contendo as chaves de um objeto. 

let obj = {
  'chave1': 1,
  'chave2': 2,
  'chave3': 3,
}

console.log("\nObjeto Keys:");
console.log(obj);
console.log(Object.keys(obj));

pessoa = {
  nome: "Jonatan",
  idade: 29,
  profissao: "Programador",
  cidade: "Cataguases",
};

console.log("\nObjeto Pessoa (Keys):");
console.log(pessoa);
console.log(Object.keys(pessoa));



//  Mutação de Objetos: A mutação ocorre quando você altera diretamente as propriedades de um objeto.

let pessoa1 = {
  nome: "Matheus"
}

let pessoa2 = pessoa1;

let pessoa3 = {
  nome: "Matheus"
}

console.log("\nMutação de Objetos:");

console.log("\npessoa1.nome = " + pessoa1.nome);
console.log("pessoa2.nome = " + pessoa2.nome);
console.log("pessoa3.nome = " + pessoa3.nome);

console.log("\npessoa1 == pessoa2");
console.log(pessoa1 == pessoa2);
if ( pessoa1.nome == pessoa2.nome) {
  console.log("Igual");
} else{
  console.log("Diferente");
}

console.log("\npessoa3 == pessoa1");
console.log(pessoa3 == pessoa1);
if ( pessoa3.nome == pessoa1.nome) {
  console.log("Igual");
} else{
  console.log("Diferente");
}

console.log("\npessoa3 == pessoa2");
console.log(pessoa3 == pessoa2);
if ( pessoa3.nome == pessoa2.nome) {
  console.log("Igual");
} else{
  console.log("Diferente");
}


console.log("\nMutação de Objetos:");

console.log("\npessoa1.nome = " + pessoa1.nome);
console.log("pessoa2.nome = " + pessoa2.nome);
console.log("pessoa3.nome = " + pessoa3.nome);


pessoa1.nome = "Maria";
console.log("mudou pessoa1 para " + pessoa1.nome);

console.log("\npessoa1.nome = " + pessoa1.nome);
console.log("pessoa2.nome = " + pessoa2.nome);
console.log("pessoa3.nome = " + pessoa3.nome);


pessoa2.nome = "Pedro";
console.log("mudou pessoa2 para " + pessoa2.nome);

console.log("\npessoa1.nome = " + pessoa1.nome);
console.log("pessoa2.nome = " + pessoa2.nome);
console.log("pessoa3.nome = " + pessoa3.nome);


pessoa3.nome = "Lucas";
console.log("mudou pessoa3 para " + pessoa3.nome);

console.log("\npessoa1.nome = " + pessoa1.nome);
console.log("pessoa2.nome = " + pessoa2.nome);
console.log("pessoa3.nome = " + pessoa3.nome);


//  JSON (JavaScript Object Notation): JSON é um formato de dados que representa objetos como strings. 

pessoa = {
  "nome": "Matheus",
  "idade": 28,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"]
}
 
console.log("\nObjeto Pessoa:");
console.log(pessoa);


//  JSON.stringify: O método JSON.stringify converte um objeto ou valor em uma string JSON.

let pessoaTexto = JSON.stringify(pessoa);
 
console.log("\nJSON.stringify:");
console.log("\nObjeto Pessoa convertido em String JSON:");
console.log(pessoaTexto);


//JSON.parse: O método JSON.parse converte uma string JSON em um objeto JavaScript.

let pessoaJSON = JSON.parse(pessoaTexto);
 
console.log("\nJSON.parse:");
console.log("\nString JSON convertida em Objeto:");
console.log(pessoaJSON);

console.log("\nPropriedade por propriedade:");
console.log("Nome: " + pessoaJSON.nome);
console.log("Idade: " + pessoaJSON.idade);
console.log("Profissao: " + pessoaJSON.profissao);
console.log("Hobbies[Pos 0]: " + pessoaJSON.hobbies[0]);
console.log("Hobbies[Pos 1]: " + pessoaJSON.hobbies[1]);
console.log("Hobbies[Pos 2]: " + pessoaJSON.hobbies[2]);



//  Destructuring de Objetos: A destructuring é uma forma de extrair valores de objetos e arrays 
//                            de forma mais concisa.

obj = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: '2.0'
}
 
console.log("\nDestructuring de Objetos:");
console.log(obj);

const {rodas: variavelRodas, portas: variavelPortas, tetosolar: variavelTetoSolar, motor: variavelMotor} = obj;

console.log("\nDestructuring de Objetos:");
console.log("Rodas: " + variavelRodas);
console.log("Portas: " + variavelPortas);
console.log("Teto Solar: " + variavelTetoSolar);
console.log("Motor: " + variavelMotor);


/*

ATIVIDADES

1. Utilizando objeto: Crie um programa que leia os dados de um usuário: 
    nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone e exiba no console.

2. Utilizando objeto: Crie um programa que leia os dados de um aluno: nome, matrícula,
     disciplina, nota. 
   - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
   - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
   exiba no console “Em recuperação” 
   - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
   criar nova propriedade chamada situacao para o aluno.
   
*/
