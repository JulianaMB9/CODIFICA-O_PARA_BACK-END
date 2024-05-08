

//  Array: Um array é uma estrutura de dados que armazena elementos de maneira ordenada. 
//  Cada elemento é acessado por meio de um índice, começando do zero. 
//  Arrays podem conter diferentes tipos de dados, como números, strings,
//  objetos ou até mesmo outros arrays.

let array_vazio = [];

console.log("\nArray Vazio:");
console.log(array_vazio);


let numeros = [1, 2, 3, 4, 5];

console.log("\nArray Numeros:");
console.log(numeros);

console.log("\nArray Numeros - Indice por Indice:");
for(i=0; i< numeros.length; i++){
  console.log(numeros[i]);
}
//console.log(numeros[0]);
//console.log(numeros[1]);
//console.log(numeros[2]);
//console.log(numeros[3]);
//console.log(numeros[4]);

console.log("\nArray Numeros - Tamanho:");
console.log(numeros.length);



let nomes = ['Matheus', 'João', 'Aléxia'];

console.log("\nArray Nomes:");
console.log(nomes);

console.log("\nArray Nomes - Indice por Indice:");
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);

console.log("\nArray Nomes - Tamanho:");
console.log(nomes.length);


let bool  = [true, false, true];

console.log("\nArray bool:");
console.log(bool);

console.log("\nArray bool - Indice por Indice:");
console.log(bool[0]);
console.log(bool[1]);
console.log(bool[2]);

console.log("\nArray bool - Tamanho:");
console.log(bool.length);


let diversificado = ['Jonatan Eugenio', 29, 'Desenvolvedor de Sistemas'];

console.log("\nArray Diversificado:");
console.log(diversificado);

console.log("\nArray Diversificado - Indice por Indice:");
console.log(diversificado[0]);
console.log(diversificado[1]);
console.log(diversificado[2]);

console.log("\nArray Diversificado - Tamanho:");
console.log(diversificado.length);


// Outras formas
console.log("\nArray Diversificado - Outras formas:");
console.log(diversificado[diversificado.length - diversificado.length]);
console.log(diversificado[diversificado.length - 2]);
console.log(diversificado[diversificado.length - 1]);



//Propriedades do Array: Arrays têm algumas propriedades importantes, 
//                      como length, que indica o número de elementos no array.

console.log("\nPropriedades do Array:");
let nome = "João";
console.log(nome + " Tamanho = " + nome.length);

numeros = [1, 23, 34, 5, 6, 7, 8];

console.log("numeros Tamanho = " + numeros.length);
console.log("numeros Tamanho = " + numeros['length']);



//  Métodos no Array: Arrays também têm métodos embutidos que permitem realizar diversas
//  operações. 
//  Alguns desses métodos são push, pop, shift, unshift, includes, sort, reverse, indexOf, slice, entre outros.

nome = ["Matheus", "Maria", "José"];

console.log("\nMétodos no Array: nome");
console.log(nome);



//  Método push: Adiciona um ou mais elementos ao final do array.

console.log("\nMétodos no Array: push");
nome.push('Pedro');
console.log(nome);



//  Método pop: Remove o último elemento do array.
let elementoRemovido = nome.pop();

console.log("\nMétodos no Array: pop");
console.log(elementoRemovido);
console.log(nome);

//nome.pop();
//console.log(nome);


let carros = ["BMW", "Audi", "VW", "Fiat"];

console.log("\nMétodos no Array: carros");
console.log(carros);


//  Método shift: Remove o primeiro elemento do array.

let removerPrimeiroCarro = carros.shift();
console.log("\nMétodos no Array: shift");
console.log(removerPrimeiroCarro);
console.log(carros);


//  Método unshift: Adiciona um ou mais elementos no início do array.

// um elemento
carros.unshift('Gurgel');
console.log("\nMétodos no Array: unshift");
console.log(carros);
//console.log(carros[0]);

// mais de um elemento
carros.unshift('BMW', 'Ford');
console.log("\nMétodos no Array: unshift");
console.log(carros);



//  Método splice: modifica o conteúdo de um array, 
//  removendo ou substituindo elementos existentes e/ou adicionando novos elementos. 
//  O método aceita três parâmetros principais:
//  1. Índice de Início (vInicio): 
//     Índice do array onde a modificação começará.
//  2. Número de Elementos a Serem Removidos (vRemovidos): 
//     Número de elementos a serem removidos a partir do índice de início.
//  3. Elementos a Serem Adicionados (elemento1, elemento2, ...): 
//     Elementos que serão adicionados ao array, começando no índice de início.
//
//  Sintaxe: array.splice(vInicio, vRemovidos, elemento1, elemento2, ...);


//  Removendo Elementos:
let frutas = ['Maçã', 'Banana', 'Morango', 'Pêssego'];

console.log("\nMétodos no Array: splice - Removendo Elementos:");
console.log("Array de frutas antigo:");
console.log(frutas); 

console.log("Frutas removidas > Remove 2 elementos a partir do índice 1:");
let frutasRemovidas = frutas.splice(1, 2);
console.log(frutasRemovidas); 

console.log("Array de frutas novo:");
console.log(frutas); 



//  Substituindo Elementos:
frutas = ['Maçã', 'Banana', 'Morango', 'Pêssego'];

console.log("\nMétodos no Array: splice - Substituindo Elementos");
console.log("Array de frutas antigo:");
console.log(frutas); 

console.log("Frutas substituidas > Substitui 2 elementos a partir do índice 1:");
let frutasSubstituidas = frutas.splice(1, 2, 'Laranja', 'Uva');
console.log(frutasSubstituidas); 

console.log("Array de frutas novo:");
console.log(frutas); 


//  Adicionando Elementos:
frutas = ['Maçã', 'Banana', 'Morango', 'Pêssego'];

console.log("\nMétodos no Array: splice - Adicionando Elementos");
console.log("Array de frutas antigo:");
console.log(frutas); 

console.log("Frutas adicionadas > Adiciona 2 elementos a partir do índice 1:");
frutas.splice(1, 0, 'Laranja', 'Uva');

console.log("Array de frutas novo:");
console.log(frutas); 



//  Método slice: Cria uma cópia de parte do array, 
//  especificando os índices de início e fim.

frutas = ['Maçã', 'Banana', 'Morango', 'Pêssego'];

console.log("\nMétodos no Array: slice");

console.log(frutas)

console.log("\nMétodos no Array: criando cópia de todo array");
let frutasCopia = frutas.slice(0)
console.log(frutasCopia)

console.log("\nMétodos no Array: criando cópia de parte do array");

console.log("\nA partir do indice 1");
frutasCopia = frutas.slice(1)
console.log(frutasCopia)

console.log("\nA partir do ultimo indice");
frutasCopia = frutas.slice(-1)
console.log(frutasCopia)

console.log("\nA partir do penultimo indice");
frutasCopia = frutas.slice(-2)
console.log(frutasCopia)

console.log("\nA partir do indice 1 encerra no indice 2");
frutasCopia = frutas.slice(1, 2)
console.log(frutasCopia)

console.log("\nA partir do indice 1 encerra no penultimo indice");
frutasCopia = frutas.slice(1, -2)
console.log(frutasCopia)



//  Método split: Divide uma string em um array de substrings com base em um delimitador.

let fraseSplit = "Testando o método split";

console.log("\nMétodos no Array: split");
console.log(fraseSplit.split(" "));



let palavrasSplit = fraseSplit.split(" ");

console.log("\nMétodos no Array: split");
console.log(palavrasSplit);


let frutasSplit = "Banana;Maçã;Uva;Pera;Goiaba;Limão";

console.log("\nMétodos no Array: split");
console.log(frutasSplit.split(';'));





//  Método join: Converte os elementos de um array em uma string, 
//               unindo-os com um separador.

frutasJoin = ["Banana", "Maçã", "Uva", "Pera", "Goiaba", "Limão"]; 

console.log("\nMétodos no Array: join");
console.log(frutasJoin.join(" - "));

console.log("\nMétodos no Array: join");
console.log(frutasJoin.join(" "));





//  Método includes: Verifica se um elemento está presente no array.

carros = ["BMW", "Fiat", "VW", "Renault", "Audi"];
console.log("\nMétodos no Array: carros");
console.log(carros);


console.log("\nMétodos no Array: includes");
console.log(carros.includes("Fiat"));
console.log(carros.includes("Ford"));

if(carros.includes("BMW")) {
  console.log("Tem BWM!");
}
else {
  console.log("Não Tem BWM!");  
}
 

//  Método sort: Ordena os elementos do array.

carros = ["BMW", "Fiat", "VW", "Renault", "Audi", "Ford"];

console.log("\nMétodos no Array: Carros");
console.log(carros);

console.log("\nMétodos no Array: sort");
console.log(carros.sort());
console.log(carros.sort());



//  Método reverse: Inverte a ordem dos elementos do array.

carros = ["BMW", "Fiat", "VW", "Renault", "Audi", "Ford"];
console.log("\nMétodos no Array: Carros");
console.log(carros);

console.log("\nMétodos no Array: reverse");
console.log(carros.reverse());
console.log(carros.reverse());



console.log("\nMétodos no Array: Carros");
console.log(carros);

console.log("\nMétodos no Array: sort e reverse");
console.log(carros.sort());
console.log(carros.reverse());


numeros = [5,6,2,4,9,7,1,3,8];

console.log("\nMétodos no Array: numeros");
console.log(numeros);

console.log("\nMétodos no Array: sort e reverse");
console.log(numeros.sort());
console.log(numeros.reverse());



//  Método indexOf: Retorna o índice do primeiro elemento encontrado no array.

numeros = [2,4,9,6,2,7,8,2];
console.log("\nMétodos no Array: indexOf");
console.log(numeros.indexOf(2));

//  Método lastIndexOf: Retorna o índice do último elemento encontrado no array.
console.log("\nMétodos no Array: lastIndexOf");
console.log(numeros.lastIndexOf(2));


  
//  Loop em Array


// For

nomes = ["Maria", "Pedro", "João"];

console.log("\nLoop em Array: For");
for(let i = 0; i < nomes.length; i++) {
  console.log("posicao = " + i + " valor = " + nomes[i] + " tamanho = " + nomes[i].length);
}


numeros = [1, 2, 3, 4, 5];

console.log("\nLoop em Array: For");
for (let i = 0; i < numeros.length; i++) {
  console.log("posicao = " + i + " valor = " + numeros[i]);
}



// For In

nomes = ["Maria", "Pedro", "João"];

console.log("\nLoop em Array: For In");
for(let i in nomes) {
  console.log("posicao = " + i + " valor = " + nomes[i] + " tamanho = " + nomes[i].length);
}

numeros = [1, 2, 3, 4, 5];

console.log("\nLoop em Array: For In");
for(let i  in numeros) {
  console.log("posicao = " + i + " valor = " + numeros[i]);
}



// For Of

nomes = ["Maria", "Pedro", "João"];

console.log("\nLoop em Array: For Of");
for(let i of nomes) {
 console.log("valor = " + i + " tamanho = " + i.length);
}

numeros = [1, 2, 3, 4, 5];

console.log("\nLoop em Array: For Of");
for(let i of numeros) {
 console.log("valor = " + i);
}



// Foreach

nomes = ["Maria", "Pedro", "João"];

console.log("\nLoop em Array: Foreach");
nomes.forEach(nomeVariavel => {
  console.log("O nome é " + nomeVariavel + " e o tamanho do nome é " + nomeVariavel.length);
});


numeros = [1, 2, 3, 4, 5];

console.log("\nLoop em Array: Foreach");
let variavelForEach = numeros.forEach(
  function(numeroVariavel) {
    console.log("O numero é " + numeroVariavel);
    return numeroVariavel;
  }
);
console.log("\nVariavel Foreach");
console.log(variavelForEach);


// Map

numeros = [1, 2, 3, 4, 5];

console.log("\nLoop em Array: Map");
let variavelMap = numeros.map(
  function(numeroVariavel) {
    console.log("O numero é " + numeroVariavel);
    return numeroVariavel;
  }
);
console.log("\nVariavel Map");
console.log(variavelMap);



// Criando um array de objetos
let pessoas = [
  { nome: 'Maria', idade: 30, cidade: 'Juiz de Fora' }, 
  { nome: 'João', idade: 25, cidade: 'Leopoldina' },    
  { nome: 'Pedro', idade: 28, cidade: 'Cataguases' }    
];

console.log("\nArray de objetos");
console.log(pessoas);


// Acessando as propriedades do array de objetos
console.log("\nAcessando as propriedades do array de objetos: Indice 0");
console.log(pessoas[0].nome); 
console.log(pessoas[0].idade); 
console.log(pessoas[0].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 1");
console.log(pessoas[1].nome); 
console.log(pessoas[1].idade); 
console.log(pessoas[1].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 2");
console.log(pessoas[2].nome); 
console.log(pessoas[2].idade); 
console.log(pessoas[2].cidade); 


// Loop em array de objetos
console.log("\nLoop em array de objetos");
for (let pessoa of pessoas) {
  console.log(`> ${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}.`);
}



// Adicionando um novo objeto no final do array
console.log("\nAdicionando um novo objeto no final do array");
pessoas.push({ nome: 'Ana', idade: 22, cidade: 'Santana de Cataguases' });
console.log("\nAcessando as propriedades do array de objetos: Indice 0");
console.log(pessoas[0].nome); 
console.log(pessoas[0].idade); 
console.log(pessoas[0].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 1");
console.log(pessoas[1].nome); 
console.log(pessoas[1].idade); 
console.log(pessoas[1].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 2");
console.log(pessoas[2].nome); 
console.log(pessoas[2].idade); 
console.log(pessoas[2].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 3");
console.log(pessoas[3].nome); 
console.log(pessoas[3].idade); 
console.log(pessoas[3].cidade); 



// Removendo um objeto do final do array

console.log("\nRemovendo um objeto do final do array");
pessoas.pop();
console.log("\nAcessando as propriedades do array de objetos: Indice 0");
console.log(pessoas[0].nome); 
console.log(pessoas[0].idade); 
console.log(pessoas[0].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 1");
console.log(pessoas[1].nome); 
console.log(pessoas[1].idade); 
console.log(pessoas[1].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 2");
console.log(pessoas[2].nome); 
console.log(pessoas[2].idade); 
console.log(pessoas[2].cidade); 


// Removendo um objeto do inicio do array

console.log("\nRemovendo um objeto do inicio do array");
pessoas.shift();
console.log("\nAcessando as propriedades do array de objetos: Indice 0");
console.log(pessoas[0].nome); 
console.log(pessoas[0].idade); 
console.log(pessoas[0].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 1");
console.log(pessoas[1].nome); 
console.log(pessoas[1].idade); 
console.log(pessoas[1].cidade); 


// Adicionando um ou mais objetos no início do array
console.log("\nAdicionando um objeto no início do array");
pessoas.unshift({ nome: 'Marcos Paulo', idade: 24, cidade: 'Cataguarino' });
console.log("\nAcessando as propriedades do array de objetos: Indice 0");
console.log(pessoas[0].nome); 
console.log(pessoas[0].idade); 
console.log(pessoas[0].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 1");
console.log(pessoas[1].nome); 
console.log(pessoas[1].idade); 
console.log(pessoas[1].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 2");
console.log(pessoas[2].nome); 
console.log(pessoas[2].idade); 
console.log(pessoas[2].cidade); 


console.log("\nAdicionando mais de um objeto no início do array");
pessoas.unshift({ nome: 'Hugo', idade: 22, cidade: 'Cataguases' },{ nome: 'Luiza', idade: 15, cidade: 'Cataguases' });
console.log("\nAcessando as propriedades do array de objetos: Indice 0");
console.log(pessoas[0].nome); 
console.log(pessoas[0].idade); 
console.log(pessoas[0].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 1");
console.log(pessoas[1].nome); 
console.log(pessoas[1].idade); 
console.log(pessoas[1].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 2");
console.log(pessoas[2].nome); 
console.log(pessoas[2].idade); 
console.log(pessoas[2].cidade);
console.log("\nAcessando as propriedades do array de objetos: Indice 3");
console.log(pessoas[3].nome); 
console.log(pessoas[3].idade); 
console.log(pessoas[3].cidade); 
console.log("\nAcessando as propriedades do array de objetos: Indice 4");
console.log(pessoas[4].nome); 
console.log(pessoas[4].idade); 
console.log(pessoas[4].cidade); 



// Modificando uma propriedade do terceiro objeto
console.log("\nModificando uma propriedade do terceiro objeto");
console.log("valor antigo: " + pessoas[2].idade); 
pessoas[2].idade = 88;
console.log("valor novo: " + pessoas[2].idade); 


// Exibindo o array de objetos atualizado
console.log("\nExibindo o array de objetos atualizado");
console.log(pessoas);


// Gerando uma copia do array de objetos atualizado
console.log("\nGerando uma copia do array de objetos atualizado");
let pessoasCopia = pessoas.slice(0)
console.log(pessoasCopia)


//  Destructuring de Array: Permite extrair valores de um array e atribuí-los a variáveis individuais.
numeros = [ 2, 4, 5, 8];

let [numIndice0, numIndice1, numIndice2, numIndice3] = numeros;

console.log("\nDestructuring de Array: Numeros");
console.log(numeros);
console.log("Extração dos Indices");
console.log("Numero do Indice 0: " + numIndice0);
console.log("Numero do Indice 1: " + numIndice1);
console.log("Numero do Indice 2: " + numIndice2);
console.log("Numero do Indice 3: " + numIndice3);

  
//  Métodos String

//  Método trim: Remove espaços em branco do início e do final de uma string.
nome = " \n   Matheus \n ";

let nomeCorrigido = nome.trim();

console.log("\nMétodos em String: trim");
console.log(nome);
console.log(nomeCorrigido);


//  Método padStart: Preenche o início de uma string com caracteres especificados até 
//  atingir o comprimento desejado.
let num1 = "34";
console.log("\nMétodos em String: padStart");
console.log(num1.padStart(6, "0"));

let num2 = "7348";
console.log("\nMétodos em String: padStart");
console.log(num2.padStart(6, "X"));


//  Método repeat: Repete uma string um número específico de vezes.
let palavra = "Olá, Mundo!";

console.log("\nMétodos em String: repeat");
console.log(palavra.repeat(2));

palavra = "\nOlá, Mundo!";
console.log("\nMétodos em String: repeat");
console.log(palavra.repeat(3));


console.log("\nMétodos em String: repeat");
let repeticao = 'abcd'.repeat(3);
console.log(repeticao);



//  Método toUpperCase: Converte todos os caracteres de uma string para maiúsculas.

palavra = "Olá, Mundo!";

console.log("\nMétodos em String: toUpperCase");
console.log(palavra.toUpperCase());


//  Método toLowerCase: Converte todos os caracteres de uma string para minúsculas.

palavra = "Olá, Mundo!";

console.log("\nMétodos em String: toLowerCase");
console.log(palavra.toLowerCase());



//  Matriz:
//  Uma matriz (ou array bidimensional) é uma coleção de elementos organizados em linhas e colunas. 
//  Cada elemento em uma matriz pode ser acessado por meio de coordenadas, 
//  geralmente representadas por índices de linha e coluna.

let matriz = [
    ["indice[0][0]", "indice[0][1]", "indice[0][2]"],
    ["indice[1][0]", "indice[1][1]", "indice[1][2]"],
    ["indice[2][0]", "indice[2][1]", "indice[2][2]"]
];

console.log("\nMatriz:");
console.log(matriz);

matriz = [
    ["lin1 col1", "lin1 col2", "lin1 col3"],
    ["lin2 col1", "lin2 col2", "lin2 col3"],
    ["lin3 col1", "lin3 col2", "lin3 col3"]
];

console.log("\nMatriz:");
console.log(matriz);

matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("\nMatriz:");
console.log(matriz);



// Acessar Elementos:
console.log("\nMatriz: Acessando Elementos:");
console.log("indice[0][0] = " + matriz[0][0]);
console.log("indice[0][1] = " + matriz[0][1]);
console.log("indice[1][2] = " + matriz[1][2]); 
console.log("indice[2][2] = " + matriz[2][2]); 


//  Modificar Elementos:
matriz[0][0] = -1;
matriz[0][1] = -2;
matriz[1][2] = -6;
matriz[2][2] = -9;
console.log("\nMatriz: Modificando Elementos:");
console.log("indice[0][0] = " + matriz[0][0]);
console.log("indice[0][1] = " + matriz[0][1]);
console.log("indice[1][2] = " + matriz[1][2]); 
console.log("indice[2][2] = " + matriz[2][2]); 

console.log("\nMatriz:");
console.log(matriz);

// Loop em Matriz:
console.log("\nLoop em Matriz:");
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log("indice[" + i + "][" + j + "] = " + matriz[i][j]);
    }
}



// Adicionar Linha ou Coluna:

// Adicionar Linha
console.log("\nMatriz: Adiciona uma nova linha");

matriz.push([10, 11, 12]); 

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
      console.log("indice[" + i + "][" + j + "] = " + matriz[i][j]);
  }
}





// Adicionar Coluna
console.log("\nMatriz: Adiciona uma nova coluna com valor 0 a cada linha");

matriz.forEach(function (row) {
  return row.push(10000000);
}); 

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
      console.log("indice[" + i + "][" + j + "] = " + matriz[i][j]);
  }
}




// Remover Linha ou Coluna:

// Remover Linha
console.log("\nMatriz: Remove a última linha");

matriz.pop(); 

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
      console.log("indice[" + i + "][" + j + "] = " + matriz[i][j]);
  }
}



// Remover Coluna
console.log("\nMatriz: Remove a última coluna de cada linha");

matriz.forEach(function (row) {
    return row.pop();
}); 

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
      console.log("indice[" + i + "][" + j + "] = " + matriz[i][j]);
  }
}


/*

ATIVIDADE 1. Utilizando arrays: A imobiliária ABC vende apenas terrenos retangulares. 
Crie um programa para ler as dimensões de um terreno e depois exibir a área do terreno. 

ATIVIDADE 2. Utilizando arrays: Crie um programa que leia o nome e o preço de 8 produtos. 
No final, mostre no console qual foi o nome e preço do maior e qual foi o nome e preço do menor preço digitados. 

ATIVIDADE 3. Utilizando arrays:  Crie um programa que leia o nome, a idade e o sexo de 5 pessoas, 
mostrando no final: 
a) Quantos homens foram cadastrados 
b) Quantas mulheres foram cadastradas 
c) A média de idade do grupo 
d) A média de idade dos homens 
e) Quantas mulheres tem mais de 20 anos 


ATIVIDADE 4. Utilizando arrays: Crie um programa que leia o peso e a altura de 7 pessoas, 
mostrando no final: 
a) Qual foi a média de altura do grupo 
b) Quantas pessoas pesam mais de 90Kg 
c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m 
d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg. 


ATIVIDADE 5. Utilizando arrays: Crie um programa que leia os dados de um aluno: 
matrícula, nome completo, nome do curso, 5 disciplinas do curso com 5 notas (uma para cada disciplina). 
Ao final, mostre no console a média geral do aluno no curso.

*/