
// Exemplo de declaração de var
function exemploVar() {
  if (true) {
    var valorNumerico = 10;
    console.log(valorNumerico); // Exibe o valor 10 no console
  }
  console.log(valorNumerico); // Exibe o valor 10 no console
}
exemploVar();


// Exemplo de declaração de let
function exemploLet() {
  if (true) {
    let valorNumerico = 10;
    console.log(valorNumerico); // Exibe o valor 10 no console
  }
  //console.log(valorNumerico); // Erro: ReferenceError: valorNumerico is not defined
}
exemploLet();


// Exemplo de declaração de const
function exemploConst() {
  if (true) {
    const valorNumerico = 10;
    console.log(valorNumerico); // Exibe o valor 10 no console
  }
  //console.log(valorNumerico); // Erro: ReferenceError: valorNumerico is not defined
}
exemploConst();


// Nomenclatura de Variaveis

// Nomes Não Permitidos
// let 3nome = 'teste';
// let @nome = 'teste';
// let !nome = 'teste';

// Palavras reservadas - Nomes Não Permitidos
// let if = 'teste';
// let function = 'teste';

// Nomes parecidos mas permitidos
let if1 = 'teste';
let function1 = 'teste';

console.log(if1);
console.log(function1);


// Nomes Permitidos
let nome = 'teste';
let $nome = 'teste';
let _nome = 'teste';
let Nome = 'teste';
let seu_nome = 'teste';

console.log(nome);
console.log($nome);
console.log(_nome);
console.log(Nome);
console.log(seu_nome);

// Case sensitive - Cada variavel abaixo é uma variavel diferente
let SeuNome = 'teste1';
let seuNome = 'teste2';
let seunome = 'teste3';
let SEUNOME = 'teste4';

console.log(SeuNome);
console.log(seuNome);
console.log(seunome);
console.log(SEUNOME);


// Exibição de mensagem no console
let meuNome = "Jonatan";
let minhaIdade = 29;

console.log(minhaIdade);
console.log(meuNome);
console.log("O meu nome é " + meuNome + ", e tenho " + minhaIdade + " anos.");
console.log('O meu nome é ' + meuNome + ', e tenho ' + minhaIdade + ' anos.');
console.log(`O meu nome é ${meuNome}, e tenho ${minhaIdade} anos.`);

meuNome = prompt("Qual o seu nome?");
minhaIdade = prompt("Qual a sua idade?");
console.log("O seu nome é " + meuNome + ", e voce tem " + minhaIdade + " anos.");
console.log('O seu nome é ' + meuNome + ', e voce tem ' + minhaIdade + ' anos.');
console.log(`O seu nome é ${meuNome}, e voce tem ${minhaIdade} anos.`);


let laranja;
console.log("Valor: " + laranja + " Tipo de Dados: " + typeof laranja);

laranja = "Laranja";
console.log("Valor: " + laranja + " Tipo de Dados: " + typeof laranja);

laranja = 2;
console.log("Valor: " + laranja + " Tipo de Dados: " + typeof laranja);

//laranja = "2";
console.log("\nOperações Aritméticas com laranja");
console.log("Soma com laranja: "  + (laranja + laranja));
console.log("SUbtração com laranja: "  + (laranja - laranja));
console.log("Multiplicação com laranja: "  + (laranja * laranja));
console.log("Divisão com laranja: " + (laranja / laranja));
console.log("Resto com laranja: " + (laranja % laranja));
 