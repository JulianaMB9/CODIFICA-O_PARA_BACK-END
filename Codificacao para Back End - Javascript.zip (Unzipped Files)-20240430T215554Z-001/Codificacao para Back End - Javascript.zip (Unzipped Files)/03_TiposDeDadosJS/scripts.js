// Tipo de Dados - Number (Número): Representa números inteiros ou de ponto flutuante.
let inteiro = 5;
let decimal = 12.7;
let inteiroNegativo = -123;

console.log("\nTipo de Dados - Number:");
console.log(" - O valor " + inteiro + " é: " + typeof inteiro);
console.log(" - O valor " + decimal + " é: " + typeof decimal);
console.log(" - O valor " + inteiroNegativo + " é: " + typeof inteiroNegativo);

console.log("\nTipo de Dados - Number (Especiais):");
console.log(" - O valor " + Infinity + " é: " + typeof Infinity);
console.log(" - O valor " + -Infinity + "  é: " + typeof -Infinity);
console.log(" - O valor " + NaN + " é: " + typeof NaN);

console.log("\nTipo de Dados - Number em Operações Aritméticas:");
console.log(" - A operação (2 + 3) é: " + typeof (2 + 3) + " e o seu resultado é igual a " + (2 + 3));
console.log(" - A operação (5 - 12) é: " + typeof (5 - 12) + " e o seu resultado é igual a " + (5 - 12));
console.log(" - A operação (4 * 4) é: " + typeof (4 * 4) + " e o seu resultado é igual a " + (4 * 4));
console.log(" - A operação (5 / 3) é: " + typeof (5 / 3) + " e o seu resultado é igual a " + (5 / 3));
console.log(" - A operação (20 % 2) é: " + typeof (20 % 2) + " e o seu resultado é igual a " + (20 % 2));
console.log(" - A operação (21 % 2) é: " + typeof (21 % 2) + " e o seu resultado é igual a " + (21 % 2));



// Tipo de Dados - String (Cadeia de caracteres): Representa sequências de caracteres.
let texto1 = "texto1";
let texto2 = 'texto2';
let texto3 = `texto3`;
console.log(texto1);
console.log(texto2);
console.log(texto3);

console.log("\nTipo de Dados - String:");
console.log(' - O Tipo de Dados de "Oi, meu nome é Matheus" é: ' + typeof "Oi, meu nome é Matheus");
console.log(" - O Tipo de Dados de 'Eu queria comprar um carro' é: " + typeof 'Eu queria comprar um carro');
console.log(" - O Tipo de Dados de `Que dia é hoje?` é: " + typeof `Que dia é hoje?`);
console.log(' - O Tipo de Dados de "Infinity" é diferente do valor de ' + Infinity + '. O primeiro é ' + typeof "Infinity" + ", já o segundo é: " + typeof Infinity);

console.log("\nTipo de Dados - String: (Aspas Duplas, Simples e Crase)");
console.log("A multiplicação de 5 por 3 é ${5*3}");
console.log('A multiplicação de 5 por 3 é ${5*3}');
console.log(`A multiplicação de 5 por 3 é ${5*3}`);




// Tipo de Dados - Boolean (Booleano): Representa valores lógicos true ou false.
let verdadeiro = true;
let falso = false;

console.log("\nTipo de Dados - Boolean");
console.log(" - O valor " + verdadeiro + " é: " + typeof verdadeiro);
console.log(" - O valor " + falso + " é: " + typeof falso);

console.log("\nTipo de Dados - Boolean em Operações Relacionais");
console.log(" - A condição (1 > 2) é " + (1 > 2) + " e seu Tipo de Dados é: " + typeof (1 > 2));
console.log(" - A condição (5 < 10) é " + (5 < 10) + " e seu Tipo de Dados é:: " + typeof (5 < 10));
console.log(" - A condição (3 >= 3) é " + (3 >= 3) + " e seu Tipo de Dados é:: " + typeof (3 >= 3));
console.log(" - A condição (5 <= 4) é " + (5 <= 4) + " e seu Tipo de Dados é:: " + typeof (5 <= 4));

console.log("\nTipo de Dados - Boolean em Operações Relacionais == e ===");
console.log("  == compara os valores, realizando uma conversão de tipo, se necessário, antes de fazer a comparação");
console.log(" === compara os valores e os tipos dos operandos sem fazer conversão de tipo");
console.log(" - A condição (4 == 4) é " + (4 == 4) + " e seu Tipo de Dados é:: " + typeof (4 == 4));
console.log(" - A condição (4 == '4') é " + (4 == '4') + " e seu Tipo de Dados é:: " + typeof (4 == '4'));
console.log(" - A condição (4 === 4) é " + (4 === 4) + " e seu Tipo de Dados é:: " + typeof (4 === 4));
console.log(" - A condição (4 === '4') é " + (4 === '4') + " e seu Tipo de Dados é:: " + typeof (4 === '4'));

console.log("\nTipo de Dados - Boolean em Operações Relacionais != e !==");
console.log("  != compara os valores, realizando uma conversão de tipo, se necessário, antes de fazer a comparação");
console.log(" !== compara os valores e os tipos dos operandos sem fazer conversão de tipo");
console.log(" - A condição (4 != 4) é " + (4 != 4) + " e seu Tipo de Dados é:: " + typeof (4 != 4));
console.log(" - A condição (4 != '4') é " + (4 != '4') + " e seu Tipo de Dados é:: " + typeof (4 != '4'));
console.log(" - A condição (4 !== 4) é " + (4 !== 4) + " e seu Tipo de Dados é:: " + typeof (4 !== 4));
console.log(" - A condição (4 !== '4') é " + (4 !== '4') + " e seu Tipo de Dados é:: " + typeof (4 !== '4'));

console.log("\nTipo de Dados - Boolean em Operações Lógicas");
console.log(" - A condição (5 > 3 && 3 == 2) é " + (5 > 3 && 3 == 2) + " e seu Tipo de Dados é: " + typeof (5 > 3 && 3 == 2));
console.log(" - A condição (5 > 3 || 3 == 1) é " + (5 > 3 || 3 == 1) + " e seu Tipo de Dados é: " + typeof (5 > 3 || 3 == 1));
console.log(" - A condição (3 == 3 && 'Matheus' == 'Matheus') é " + (3 == 3 && 'Matheus' == 'Matheus') + " e seu Tipo de Dados é: " + typeof (3 == 3 && 'Matheus' == 'Matheus'));
console.log(" - A condição ('Felipe' == 'João' || false) é " + ('Felipe' == 'João' || false) + " e seu Tipo de Dados é: " + typeof ('Felipe' == 'João' || false));
console.log(" - A condição (true && true) é " + (true && true) + " e seu Tipo de Dados é: " + typeof (true && true));
console.log(" - A condição (false || false) é " + (false || false) + " e seu Tipo de Dados é: " + typeof (false || false));
console.log(" - A condição (!(!(true && true))) é " + (!(!(true && true))) + " e seu Tipo de Dados é: " + typeof (!(!(true && true))));
 

// Tipo de Dados - Undefined (Indefinido): Representa uma variável que foi declarada, mas ainda não recebeu um valor.
let indefinido;
let indefinido2 = undefined;

console.log("\nTipo de Dados - Undefined");
console.log(" - O valor " + indefinido + " é: " + typeof indefinido);
console.log(" - O valor " + indefinido2 + " é: " + typeof indefinido2);


// Tipo de Dados - Null (Nulo): Representa a ausência intencional de qualquer valor ou objeto.
let nulo = null;

console.log("\nTipo de Dados - Null");
console.log(" - O valor " + nulo + " é: " + typeof nulo);



// Tipo de Dados - Object (Objeto): Representa uma coleção de pares chave-valor.
let pessoa = {
    nome: "Jonatan",
    idade: 29,
    casado: true
};

console.log("\nTipo de Dados - Object");
console.log(" - Pessoa é um: " + typeof pessoa);
console.log(" - O Atributo nome é: " + typeof pessoa.nome + " e seu valor é: " + pessoa.nome);
console.log(" - O Atributo idade é: " + typeof pessoa.idade + " e seu valor é: " + pessoa.idade);
console.log(" - O Atributo casado é: " + typeof pessoa.casado + " e seu valor é: " + pessoa.casado);



// Tipo de Dados - Array: Representa uma coleção ordenada de valores.
let frutas = ["maçã", "banana", "laranja"];

console.log("\nTipo de Dados - Array");
console.log(" - Frutas é um: " + typeof frutas);
console.log(" - Na posição 0 é: " + typeof frutas[0] + " e seu valor é: " + frutas[0]);
console.log(" - Na posição 1 é: " + typeof frutas[1] + " e seu valor é: " + frutas[1]);
console.log(" - Na posição 2 é: " + typeof frutas[2] + " e seu valor é: " + frutas[2]);

let professor = ["Jonatan", 29, true];

console.log("\n - Professor é um: " + typeof professor);
console.log(" - Na posição 0 é: " + typeof professor[0] + " e seu valor é: " + professor[0]);
console.log(" - Na posição 1 é: " + typeof professor[1] + " e seu valor é: " + professor[1]);
console.log(" - Na posição 2 é: " + typeof professor[2] + " e seu valor é: " + professor[2]);

let array_js = ["Posicao 0", "Posicao 1", "Posicao 2"];
console.log("\n - array_js é um: " + typeof array_js);
console.log(" - Na posição 0 é: " + typeof array_js[0] + " e seu valor é: " + array_js[0]);
console.log(" - Na posição 1 é: " + typeof array_js[1] + " e seu valor é: " + array_js[1]);
console.log(" - Na posição 2 é: " + typeof array_js[2] + " e seu valor é: " + array_js[2]);
console.log(" - Na posição 3 é: " + typeof array_js[3] + " e seu valor é: " + array_js[3]);


// Tipo de Dados - Function: Representa um bloco de código reutilizável.
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

console.log("\nTipo de Dados - Function");
console.log(" - O Tipo de Dados é: " + typeof saudacao + " e seu valor é: " + saudacao("Jonatan"));
console.log(" - O Tipo de Dados é: " + typeof saudacao + " e seu valor é: " + saudacao(10));

// Date: Representa uma data e hora.
let hoje = new Date();

console.log("\nTipo de Dados - Date");
console.log(" - Hoje é: " + typeof hoje + " e seu valor é: " + hoje);
console.log(" - Data Formatada é: " + hoje.toLocaleDateString('pt-BR') + " " + hoje.toLocaleTimeString('pt-BR') );



// Tipo de Dados - Conversão Automática
console.log("\nTipo de Dados - Conversão Automática");
console.log(' - A operação ("123" + 4) é: ' + typeof ("123" + 4) + ' e o seu resultado é igual a ' + ("123" + 4));
console.log(' - A operação ("30" - 20) é: ' + typeof ("30" - 20) + ' e o seu resultado é igual a ' + ("30" - 20));
console.log(' - A operação ("10" * 3) é: ' + typeof ("10" * 3) + ' e o seu resultado é igual a ' + ("10" * 3));
console.log(' - A operação ("9" / 3) é: ' + typeof ("9" / 3) + ' e o seu resultado é igual a ' + ("9" / 3));
console.log(' - A operação ("AAA" + 4) é: ' + typeof ("AAA" + 4) + ' e o seu resultado é igual a ' + ("AAA" + 4));
console.log(' - A operação ("AAA" - 20) é: ' + typeof ("AAA" - 20) + ' e o seu resultado é igual a ' + ("AAA" - 20));
console.log(' - A operação ("AAA" * 3) é: ' + typeof ("AAA" * 3) + ' e o seu resultado é igual a ' + ("AAA" * 3));
console.log(' - A operação ("AAA" / 3) é: ' + typeof ("AAA" / 3) + ' e o seu resultado é igual a ' + ("AAA" / 3));
console.log(' - A operação (parseInt("123") + 4) é: ' + typeof (parseInt("123") + 4) + ' e o seu resultado é igual a ' + (parseInt("123") + 4));

