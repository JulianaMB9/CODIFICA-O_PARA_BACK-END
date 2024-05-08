/*
    Expressões Regulares (RegExp):

    As expressões regulares, também conhecidas como regex ou regexp, são padrões utilizados 
    para encontrar e manipular strings. 
    Elas fornecem uma maneira concisa e flexível de realizar correspondências, 
    substituições e extrações de texto em strings. 
    Em JavaScript, expressões regulares são representadas por objetos do tipo RegExp.

    Uma expressão regular é composta por caracteres literais e metacaracteres, que possuem significados especiais.

    - Caracteres Literais: Correspondem a si mesmos. 
    Por exemplo, a expressão /abc/ corresponde exatamente à sequência "abc".
    

    - Metacaracteres: Caracteres especiais com significados especiais, como:
        . (ponto): Qualquer caractere, exceto quebras de linha.
        ^ (circunflexo): Início da string.
        $ (cifrão): Fim da string.
        * (asterisco): Zero ou mais ocorrências do caractere anterior.
        + (sinal de adição): Uma ou mais ocorrências do caractere anterior.
        ? (ponto de interrogação): Zero ou uma ocorrência do caractere anterior.
        [ ] (colchetes): Um conjunto de caracteres.
        | (barra vertical): Alternância Ou.
        () (parênteses):  Grupo de captura.


    Modificadores:

    Os modificadores são caracteres especiais ou combinações de caracteres que alteram o comportamento padrão da busca
    ou correspondência. 
    Eles são usados para especificar opções ou ajustes nas regras de correspondência.
    

    - i (ignora maiúsculas/minúsculas): 
    Faz com que a busca ou correspondência seja insensível a maiúsculas e minúsculas.
    
    - g (correspondência global): 
    Faz com que a busca ou correspondência seja global, ou seja, encontra todas as ocorrências na string, 
    não apenas a primeira.
    
    - m (correspondência de várias linhas): 
    Faz com que os caracteres ^ e $ correspondam ao início e ao final de cada linha, 
    em vez do início e do final da string.
    
    - s (modo ponto único): 
    Faz com que o ponto (.) corresponda a qualquer caractere, incluindo quebras de linha (\n).

*/

//  Exemplos Regex

//  Método test(string): Testa se a expressão regular tem correspondência na string e retorna um booleano.


//  Cria uma expressão regular usando new RegExp("bola").
const prompt = require("prompt-sync")();

let regex = new RegExp("bola");

//  Testa a expressão regular em duas strings diferentes usando o método .test().
console.log("\n\nExemplos Regex - test(string) - procura a substring 'bola'")
console.log(regex.test("Tem bola?"));
console.log(regex.test("Não tem"));





//  Usando a notação literal de expressão regular:

console.log("\n\nExemplos Regex - test(string) - /bola/")
let texto = "Tem bola na cesta";
regex = /bola/;

console.log(/bola/.test("Tem bola?"));
console.log(regex.test("Tem bola?"));
console.log(regex.test("Não tem"));
console.log(regex.test(texto));



console.log("\n\nExemplos Regex - test(string) /\\d+/")
regex = /\d+/; // \d representa qualquer dígito, + significa uma ou mais ocorrências

console.log("Testando abc, resultado = " + regex.test("abc1")); 
console.log("Testando ABC, resultado = " + regex.test("ABC"));
console.log("Testando 123, resultado = " + regex.test("123")); 
console.log("Testando 123abc, resultado = " + regex.test("123abc")); 

/*
console.log("\n\nExemplos Regex - test(string) /abc/")
regex = /abc/

console.log("Testando abc, resultado = " + regex.test("abc")); 
console.log("Testando ABC, resultado = " + regex.test("ABC"));
console.log("Testando 123, resultado = " + regex.test("123")); 
console.log("Testando 123abc, resultado = " + regex.test("123abc")); 



console.log("\n\nExemplos Regex - test(string) /abc/i")
regex = /abc/i

console.log("Testando abc, resultado = " + regex.test("abc")); 
console.log("Testando ABC, resultado = " + regex.test("ABC"));
console.log("Testando 123, resultado = " + regex.test("123")); 
console.log("Testando 123abc, resultado = " + regex.test("123abc")); 



console.log("\n\nExemplos Regex - test(string) /abc/m")
let abc = /abc/m

console.log("Testando abc, resultado = " + abc.test("abc")); 
console.log("Testando ABC, resultado = " + abc.test("ABC"));
console.log("Testando abc\\nABC, resultado = " + abc.test("abc\nABC")); 
console.log("Testando 123\\nabc, resultado = " + abc.test("123\nabc")); 
console.log("Testando 123abc, resultado = " + abc.test("123abc")); 
console.log("Testando 123\\nabc\\n123, resultado = " + abc.test("123\nabc\n123")); 
console.log("Testando 123\\nABC\\n123, resultado = " + abc.test("123\nABC\n123")); 

console.log("\n\nExemplos Regex - test(string) /abc/im")
abc = /abc/im

console.log("Testando abc, resultado = " + abc.test("abc")); 
console.log("Testando ABC, resultado = " + abc.test("ABC"));
console.log("Testando abc\\nABC, resultado = " + abc.test("abc\nABC")); 
console.log("Testando 123\\nabc, resultado = " + abc.test("123\nabc")); 
console.log("Testando 123abc, resultado = " + abc.test("123abc")); 
console.log("Testando 123\\nabc\\n123, resultado = " + abc.test("123\nabc\n123")); 
console.log("Testando 123\\nABC\\n123, resultado = " + abc.test("123\nABC\n123")); 


console.log("\n\nExemplos Regex - test(string) /a.c/")
abc = /a.c/

console.log("Testando abc, resultado = " + abc.test("abc")); 
console.log("Testando axc, resultado = " + abc.test("axc")); 
console.log("Testando ABC, resultado = " + abc.test("ABC"));
console.log("Testando abc\\nABC, resultado = " + abc.test("abc\nABC")); 
console.log("Testando 123\\nabc, resultado = " + abc.test("123\nabc")); 
console.log("Testando 123abc, resultado = " + abc.test("123abc")); 
console.log("Testando 123\\nabc\\n123, resultado = " + abc.test("123\nabc\n123")); 
console.log("Testando 123\\nABC\\n123, resultado = " + abc.test("123\nABC\n123")); 




console.log("\n\nExemplos Regex - test(string) /a.c/i")

abc = /a.c/i

console.log("Testando abc, resultado = " + abc.test("abc")); 
console.log("Testando axc, resultado = " + abc.test("axc")); 
console.log("Testando ABC, resultado = " + abc.test("ABC"));
console.log("Testando abc\\nABC, resultado = " + abc.test("abc\nABC")); 
console.log("Testando 123\\nabc, resultado = " + abc.test("123\nabc")); 
console.log("Testando 123abc, resultado = " + abc.test("123abc")); 
console.log("Testando 123\\nabc\\n123, resultado = " + abc.test("123\nabc\n123")); 
console.log("Testando 123\\nABC\\n123, resultado = " + abc.test("123\nABC\n123")); 




console.log("\n\nExemplos Regex - test(string) /a.c/im")

abc = /a.c/im

console.log("Testando abc, resultado = " + abc.test("abc")); 
console.log("Testando axc, resultado = " + abc.test("axc")); 
console.log("Testando ABC, resultado = " + abc.test("ABC"));
console.log("Testando abc\\nABC, resultado = " + abc.test("abc\nABC")); 
console.log("Testando 123\\nabc, resultado = " + abc.test("123\nabc")); 
console.log("Testando 123abc, resultado = " + abc.test("123abc")); 
console.log("Testando 123\\nabc\\n123, resultado = " + abc.test("123\nabc\n123")); 
console.log("Testando 123\\nABC\\n123, resultado = " + abc.test("123\nABC\n123")); 




// Método search(string): Método de string utilizado para procurar a ocorrência de um padrão. 
// Ele retorna a posição da primeira correspondência encontrada ou -1 se nenhuma correspondência for encontrada.

texto = "Uma frase com vários digitos, entre eles: 1 lápis 1 borracha 2 canetas 3 livros 10 cadernos 1 mochila";
let posicao = texto.search("digitos");

console.log(posicao); 




//  Método exec(string): Executa a busca da expressão regular na string e 
//  retorna um array com informações sobre a correspondência.


console.log("\n\nExemplos Regex - exec(string) /\\d+/")
regex = /\d+/; // \d representa qualquer dígito, + significa uma ou mais ocorrências

console.log("\nTestando 123, resultado:");
console.log(regex.exec("Uma frase com 123")); // [ '123', index: 14, input: 'Uma frase com 123', groups: undefined ]
console.log("Encontrou: " + regex.exec("Uma frase com 123"));
console.log("Index: " + regex.exec("Uma frase com 123").index);
console.log("Input: " + regex.exec("Uma frase com 123").input);




console.log("\n\nExemplos Regex - exec(string) /abc/")
regex = /abc/

console.log("\nTestando abc, resultado:"); 
console.log(regex.exec("Uma frase com a palvra abc")); // [ 'abc', index: 23, input: 'Uma frase com a palvra abc', groups: undefined ]
console.log("Encontrou: " + regex.exec("Uma frase com a palvra abc"));
console.log("Index: " + regex.exec("Uma frase com a palvra abc").index);
console.log("Input: " + regex.exec("Uma frase com a palvra abc").input);


console.log("\nTestando ABC, resultado:"); 
console.log(regex.exec("Uma frase com a palvra ABC")); // null
console.log("Encontrou: " + regex.exec("Uma frase com a palvra ABC"));



console.log("\n\nExemplos Regex - exec(string) /abc/i")
regex = /abc/i

console.log("\nTestando abc, resultado:"); 
console.log(regex.exec("Uma frase com a palvra abc")); // [ 'abc', index: 23, input: 'Uma frase com a palvra abc', groups: undefined ]
console.log("Encontrou: " + regex.exec("Uma frase com a palvra abc"));
console.log("Index: " + regex.exec("Uma frase com a palvra abc").index);
console.log("Input: " + regex.exec("Uma frase com a palvra abc").input);


console.log("\nTestando ABC, resultado:"); 
console.log(regex.exec("Uma frase com a palvra ABC")); // [ 'ABC', index: 23, input: 'Uma frase com a palvra ABC', groups: undefined ]
console.log("Encontrou: " + regex.exec("Uma frase com a palvra ABC"));
console.log("Index: " + regex.exec("Uma frase com a palvra ABC").index);
console.log("Input: " + regex.exec("Uma frase com a palvra ABC").input);




//  Método match(regexp): Método de string que retorna um array com as correspondências encontradas.

texto = "Uma frase com vários digitos, entre eles: 1 lápis 1 borracha 2 canetas 3 livros 10 cadernos 1 mochila";

regex = /\d+/;

console.log("\n\nExemplos Regex - match(regexp) /\\d+/")
console.log(texto.match(regex)); // ['1', index: 42, input: 'Uma frase com vários digitos, entre eles: 1 lápis …borracha 2 canetas 3 livros 10 cadernos 1 mochila', groups: undefined]
console.log("\nEncontrou: " + texto.match(regex)); 


regex = /\d+/g;

console.log("\n\nExemplos Regex - match(regexp) /\\d+/g")
console.log(texto.match(regex)); // ['1', '1', '2', '3', '10', '1']
console.log("\nEncontrou: " + texto.match(regex)); 


let arrayTexto = texto.match(regex);
console.log("indice[0]: " + arrayTexto[0]); 
console.log("indice[1]: " + arrayTexto[1]); 
console.log("indice[2]: " + arrayTexto[2]); 
console.log("indice[3]: " + arrayTexto[3]); 
console.log("indice[4]: " + arrayTexto[4]); 
console.log("indice[5]: " + arrayTexto[5]);





console.log("\n\nExemplos Regex - match(regexp) /\\d+/g")
texto = "123 456 789";
regex = /\d+/g;
console.log(texto.match(regex)); // [ '123', '456', '789' ]

arrayTexto = texto.match(regex);
console.log("indice[0]: " + arrayTexto[0]); 
console.log("indice[1]: " + arrayTexto[1]); 
console.log("indice[2]: " + arrayTexto[2]); 



console.log("\n\nExemplos Regex - match(regexp) /abc/gi")
texto = "Abc é ABC ou abc";
regex = /abc/gi;
console.log(texto.match(regex)); // [ 'Abc', 'ABC', 'abc' ]

arrayTexto = texto.match(regex);
console.log("indice[0]: " + arrayTexto[0]); 
console.log("indice[1]: " + arrayTexto[1]); 
console.log("indice[2]: " + arrayTexto[2]); 



console.log("\n\nExemplos Regex - match(regexp) /^abc/gim")
texto = "abc\n123abc\nabc\nABC\n123aBc";
regex = /^abc/gim; // Linha inicia com abc ou ABC
console.log(texto.match(regex)); // ['abc', 'abc', 'ABC']

arrayTexto = texto.match(regex);
console.log("indice[0]: " + arrayTexto[0]); 
console.log("indice[1]: " + arrayTexto[1]); 
console.log("indice[2]: " + arrayTexto[2]); 


regex = /abc/gim; // Linha contém com abc ou ABC
console.log(texto.match(regex)); // ['abc', 'abc', 'abc', 'ABC', 'ABC']





//  Método replace(regexp, substituicao): Método de string que substitui as correspondências encontradas 
//  por uma string específica.

console.log("\n\nExemplos Regex - match(regexp) /Sol/")
texto = "O Sol está no céu\nSol É QUENTE\no sol ilumina a terra";
regex = /^Sol/m;
console.log(texto.replace(regex, "Sal")); 


console.log("\n\nExemplos Regex - match(regexp) /Sol/gi")
texto = "O Sol está no céu\nSol É QUENTE\no sol ilumina a terra";
regex = /Sol/gi;
console.log(texto.replace(regex, "Sal")); 






// Conjuntos


//Criando uma expressão regular que procura por qualquer dígito de 1 a 5.
console.log("\n\nExemplos Regex - Conjuntos: /[12345]/");
let conjuntoRegex = /[12345]/;
console.log(conjuntoRegex.test("Temos o número 6"));
console.log(conjuntoRegex.test("Temos o número 2"));
console.log(conjuntoRegex.test("Temos o número 23"));
console.log(conjuntoRegex.test("Temos o número 60"));
console.log(conjuntoRegex.test("Temos o número 56"));




//Criando uma expressão regular que procura por qualquer dígito de 0 a 9.
console.log("\n\nExemplos Regex - Conjuntos: /[0-9]/");
conjuntoRegex = /[0-9]/;
console.log(conjuntoRegex.test("Temos o número 65448484884848484"));
console.log(conjuntoRegex.test("Temos o número"));




//Criando uma expressão regular que procura por qualquer letra minúscula de "a" a "z"
console.log("\n\nExemplos Regex - Conjuntos: /[a-z]/");
conjuntoRegex = /[a-z]/;
console.log(conjuntoRegex.test("aSD123"));
console.log(conjuntoRegex.test("ASD123ASDAD"));



//Criando uma expressão regular que procura por qualquer letra minúscula ou maiuscula de "a" a "z" 
console.log("\n\nExemplos Regex - Conjuntos: /[a-z]/i");
conjuntoRegex = /[a-z]/i;
console.log(conjuntoRegex.test("asd123asdad"));
console.log(conjuntoRegex.test("ASD123ASDAD"));



//Criando uma expressão regular que procura por qualquer letra minúscula ou maiuscula de "a" a "z" 
console.log("\n\nExemplos Regex - Conjuntos: /[a-zA-Z]/");
conjuntoRegex = /[a-zA-Z]/;
console.log(conjuntoRegex.test("asd123asdad"));
console.log(conjuntoRegex.test("ASD123ASDAD"));




// Caracteres especiais e classes de caracteres:



//Criando uma expressão regular que procura por qualquer caractere (exceto quebras de linha)
console.log("\n\nExemplos Regex - Caracteres especiais e classes de caracteres: /./ ");
let pontoRegex = /./;
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));





//Criando uma expressão regular que procura por qualquer dígito de 0 a 9
console.log("\n\nExemplos Regex - Caracteres especiais e classes de caracteres: /\\d/ ");
let dRegex = /\d/;
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));



//Criando uma expressão regular que procura por qualquer caractere que não seja um dígito
console.log("\n\nExemplos Regex - Caracteres especiais e classes de caracteres: /\\D/");
let dRegex2 = /\D/;
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));



//Criando uma expressão regular que procura por qualquer caractere de espaço em branco
console.log("\n\nExemplos Regex - Caracteres especiais e classes de caracteres: /\\s/");
let sRegex = /\s/;
console.log(sRegex.test("asd "));
console.log(sRegex.test(" iuouio"));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));



//Criando uma expressão regular que procura por qualquer caractere de palavra (alfanumérico)
console.log("\n\nExemplos Regex - Caracteres especiais e classes de caracteres: /\\w/");
let wRegex = /\w/;
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));


//Criando uma expressão regular que procura por qualquer caractere que não seja alfanumérico
console.log("\n\nExemplos Regex - Caracteres especiais e classes de caracteres: /\\W/");
wRegex = /\W/;
console.log(wRegex.test("asd$"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));




//  Operador NOT ([^...])
//  O operador ^ dentro dos colchetes, no ínicio da lista, nega o conjunto, indicando que a correspondência deve ser qualquer coisa, exceto o que está dentro dos colchetes.
//  Se o operador ^ estiver em qualquer outra posição dentro dos colchetes, ele será tratado como um caractere normal.

//Cria uma expressão regular que procura por qualquer caractere que não seja "a" ou "b"
console.log("\nOperador not: /[^ab]/");
let notab = /[^ab]/;
console.log(notab.test("ab"));
console.log(notab.test("abc"));


//Cria uma expressão regular que procura por qualquer caractere que não seja uma letra minúscula de "a" a "z"
console.log("\nOperador not: /[^a-z]/");
let nottoaz = /[^a-z]/;
console.log(nottoaz.test("abcdefghijklmnopqrstuvwxyz"));
console.log(nottoaz.test("abcdefghijklmnopqrstuvwxyzA"));
console.log(nottoaz.test("abcdefghijklmnopqrstuvwxyz1"));


//Cria uma expressão regular que procura por qualquer caractere que não seja uma letra minúscula ou maiuscula de "a" a "z"
console.log("\nOperador not: /[^a-zA-Z]/");
let nottoazAZ = /[^a-zA-Z]/;
console.log(nottoazAZ.test("abcdefghijklmnopqrstuvwxyz"));
console.log(nottoazAZ.test("abcdefghijklmnopqrstuvwxyzA"));
console.log(nottoazAZ.test("abcdefghijklmnopqrstuvwxyz1"));





//  Operador PLUS (+)
//  O operador + indica que a correspondência deve ocorrer uma ou mais vezes. 

//Criando uma expressão regular que procura por um ou mais dígitos
console.log("\nOperador plus: /\\d+/ ");
let plusDigitos = /\d+/;
console.log(plusDigitos.test("1518"));
console.log(plusDigitos.test(""));
console.log(plusDigitos.test("asdasdas"));
console.log(plusDigitos.test("1"));
console.log(plusDigitos.test("1511231231233123121323123121238"));






//  Operador QUESTION (?)
//  O operador ? indica que a correspondência é opcional.
//  Ele permite que um padrão seja encontrado mesmo que o elemento associado ocorra zero ou uma vez na string.

//Criando uma expressão regular que procura por "Abacaxi" ou "Abacai"
console.log("\nOperador question: /Abacax?i/");
let question = /Abacax?i/;
console.log(question.test("Abacaxi"));
console.log(question.test("Abacai"));
console.log(question.test("Abacax"));






// Operador de Alternância (|)):
// O operador | é utilizado para especificar alternância entre duas opções em uma expressão regular. 
// Ele funciona como um operador lógico "OU"; 

//Cria uma expressão regular que procura por padrões como "Nome: Matheus", "Nome: João" ou "Nome: Maria"
console.log("\nOperador |:  /\\w+: (Matheus|João|José|Maria)/");
let regexOU = /\w+: (Matheus|João|José|Maria)/; 

console.log(regexOU.test("Nome: Matheus"));
console.log(regexOU.test("Nome: José"));
console.log(regexOU.test("Nome: Maria"));
console.log(regexOU.test("123: Maria"));



// Operador Grupo de Captura ():
// O operador () é utilizado para agrupar parte de uma expressão regular e criar um grupo de captura. 
// Grupos de captura são úteis para extrair partes específicas de uma correspondência. 


//Cria uma expressão regular que procura por padrões de caixa postal e país
//(\d+) é um grupo de captura que corresponde a um ou mais dígitos (código postal)
//(.+) é outro grupo de captura que corresponde a um ou mais caracteres (país)

let regexGrupo = /CEP: (\d+)-(\d+), Nome: (\w+\s\w+)/;
//regexGrupo = /CEP: (\d+)-(\d+), Nome: ([a-zA-Z]+\s[a-zA-Z]+)/;
regexGrupo = /CEP: (\d+)-(\d+), Nome: ([a-z]+\s[a-z]+)/i;

texto = "CEP: 12345-123, Nome: Jonatan Eugenio";
let resultado = texto.match(regexGrupo);

console.log("CEP: " + resultado[1] + " - " + resultado[2] ); 
console.log("Nome: " + resultado[3]); 






// Expressão Regular com precisão


// Validação de CEP:

//Criando uma expressão regular que procura por um padrão de CEP com 5 dígitos, seguido por um hífen e 3 dígitos
console.log("\nExpressão Regular com precisão: /\\d{5}-\\d{3}/");
let cep = /\d{5}-\d{3}/;
console.log(cep.test("88117-500"));
console.log(cep.test("asd"));
console.log(cep.test("881-50"));
console.log(cep.test("99999-999"));




// Validação de Números de Telefone:

//Cria uma expressão regular que procura por um padrão de telefone com código de área opcional, seguido por 4 a 5 dígitos, um hífen e mais 4 dígitos
console.log("\nExpressão Regular com precisão: /\\(\\d{2,3}\\)\\d{4,5}-\\d{4}/ ");
let tel = /\(\d{2,3}\)\d{4,5}-\d{4}/;
console.log(tel.test("(48)9999-9999"));
console.log(tel.test("(48)55555-4444"));
console.log(tel.test("(48)AAAA-4444"));
console.log(tel.test("(048)9999-9999"));


let regexTelefone = /\(\d{2,3}\)\d{4,5}|\s\d{4,5}-\d{4}/;

let telefoneUsuario = prompt("Digite o seu número de telefone: ");

if (regexTelefone.test(telefoneUsuario)) {
    console.log("O número de telefone " + telefoneUsuario + " é válido!");
} else {
    console.log("O número de telefone " + telefoneUsuario + " NÃOé válido!");
}


//Validação de Domínio

//Cria uma expressão regular que valida domínios como "www.google.com" ou "horadecodar.com.br"
console.log("\nValidando dominio: /[www.?]\w+\.com.br|.com/");

let validaDominio = /[www.?]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.horadecodar.com.br"));
console.log(validaDominio.test("www.horadecodar"));
console.log(validaDominio.test("horadecodar.com.br"));



//Validação de URL

function validarURL() {

    let url = prompt("Digite uma URL:");
   
    //  Verifica se a string se parece com uma URL válida
    //  ^: Indica que a correspondência deve começar no início da string.
    //  (https?:\/\/)?: Uma parte opcional que corresponde a "http://" ou "https://".
    //  ([a-z]+\.)?: Outra parte opcional que corresponde a um subdomínio 
    //      (uma ou mais letras minúsculas seguidas de ponto).
    //  [a-z]+\.[a-z]+: Corresponde ao domínio principal 
    //(uma ou mais letras minúsculas seguidas de ponto, seguidas por uma ou mais letras minúsculas).
    //  (\/[^\s]*)?: Uma parte opcional que corresponde a uma parte do caminho da URL 
    //(uma barra seguida por zero ou mais caracteres que não são espaços).
    //  $: Indica que a correspondência deve ocorrer até o final da string.
    let regExUrl = /^(https?:\/\/)?([a-z]+\.)?[a-z]+\.[a-z]+(\/[^\s]*)?$/

    if (regExUrl.test(url)) {
        console.log("URL válida: " + url);
    } else {
        console.log("URL inválida. Por favor, digite uma URL válida.");
    }

}

validarURL();




//Validação de Email

//Cria uma expressão regular que valida e-mails como "matheus@gmail.com"
console.log("\nValidando email: /\w+@\w+\.\w+/");
let regexEmail = /\w+@\w+\.\w+/;
regexEmail = /\w+@[aA-zZ]+\.com|.com.br/;
//regexEmail = /\w+@gmail|hotmail|outlook|live|yahoo+\.com|.com.br/;
console.log(regexEmail.test("matheus123@gmail.com"));
console.log(regexEmail.test("matheus@gmail"));
console.log(regexEmail.test("gmail.com"));
console.log(regexEmail.test("matheus@gmail.com.br"));
console.log(regexEmail.test("feliz@feliz.feliz"));
console.log(regexEmail.test("feliz@feliz.com"));




function validarEmail() {

    let inputDoUsuario = prompt("Digite seu e-mail:");
   
    //  ^: Indica que a correspondência deve começar no início da string.
    //  [^\s@]+: Corresponde a um ou mais caracteres que não são espaços (\s) nem o caractere '@'. 
    //   Isso corresponde à parte do nome do usuário do endereço de e-mail.
    //  @: Corresponde ao caractere '@'.
    //  [^\s@]+: Corresponde a um ou mais caracteres que não são espaços (\s) nem o caractere '@'. Isso corresponde à parte do domínio antes do ponto.
    //  \.: Corresponde ao caractere '.' (ponto) no endereço de e-mail.
    //  [^\s@]+: Corresponde a um ou mais caracteres que não são espaços (\s) nem o caractere '@'. Isso corresponde à parte do domínio após o ponto.
    //  $: Indica que a correspondência deve ocorrer até o final da string.
    let  regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(inputDoUsuario)) {
        console.log("E-mail válido: " + inputDoUsuario);
    } else {
        console.log("E-mail inválido. Por favor, digite um e-mail válido.");
    }

}

validarEmail();






//Validação de Data

//Cria uma expressão regular que valida datas de nascimento no formato "DD/MM/AAAA"
console.log("\nValidando data: /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/");
let validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
console.log(validarDataNasc.test("05/01/2000"));
console.log(validarDataNasc.test("5/2/2000"));
console.log(validarDataNasc.test("05-02-2000"));
console.log(validarDataNasc.test("05/02/00"));
console.log(validarDataNasc.test("12/12/1999"));
console.log(validarDataNasc.test("99/99/9999"));
console.log(validarDataNasc.test("31/00/2010"));



function validarData() {
    let inputDoUsuario = prompt("Digite uma data (DD/MM/AAAA):");
    
    //  ^: Indica que a correspondência deve começar no início da string.
    //  \d{2}\/\d{2}\/\d{4}: Corresponde a dois dígitos, seguidos por "/", seguidos por mais dois dígitos, outra "/", e finalmente quatro dígitos.
    //  $: Indica que a correspondência deve ocorrer até o final da string.
    let regexData = /^\d{2}\/\d{2}\/\d{4}$/;

    if (regexData.test(inputDoUsuario)) {
        console.log("Data válida: " + inputDoUsuario);
    } else {
        console.log("Formato de data inválido. Por favor, use DD/MM/AAAA.");
    }
}

validarData();



//Validação de Números Inteiros:

function validarNumeroInteiro() {

    let inputDoUsuario = prompt("Digite um número inteiro:");

    //  Expressão regular ^\d+$:
    //  ^: Indica que a correspondência deve começar no início da string.
    //  \d+: Corresponde a um ou mais dígitos.
    //  $: Indica que a correspondência deve ocorrer até o final da string.
    //  Portanto, a expressão regular ^\d+$ verifica se a string é composta apenas por dígitos
    //  e não contém nenhum outro caractere.
    //  o método .test() é uma função que é utilizada com expressões regulares para testar 
    //  se uma string corresponde ao padrão definido pela expressão regular.
    let regex =/^\d+$/;

    if (regex.test(inputDoUsuario)) {
        console.log("Número inteiro válido: " + parseInt(inputDoUsuario, 10));
    } else {
        console.log("Entrada inválida. Por favor, digite um número inteiro.");
    }
}

validarNumeroInteiro();






//  Validação de Texto:

// Função de validação de texto
function validarTexto() {

  let inputDoUsuario = prompt("Digite um texto:");

  //  Expressão regular para verificar se a string contém apenas letras de A a Z (maiúsculas ou minúsculas) e espaços
  //  ^: Indica que a correspondência deve começar no início da string.
  //  [a-zA-Z\s]+: Corresponde a uma ou mais letras de A a Z (maiúsculas ou minúsculas) e espaços.
  //  $: Indica que a correspondência deve ocorrer até o final da string.
  let regex = /^[a-zA-Z\s]+$/;

  if (regex.test(inputDoUsuario)) {
    console.log("Texto válido: " + inputDoUsuario);
  } else {
    console.log(
      "Entrada inválida. O texto deve conter apenas letras de A a Z (maiúsculas ou minúsculas) e espaços."
    );
  }
}
validarTexto();




//  Limitação de Tamanho de Texto:

function limitarTamanhoTexto() {    
    let inputDoUsuario = prompt("Digite um texto com no máximo 10 caracteres:");

    if (inputDoUsuario.length <= 10) {
        console.log("Texto válido: " + inputDoUsuario);
    } else {
        console.log("Texto muito longo. Por favor, limite o texto a 10 caracteres.");
    }
}

limitarTamanhoTexto();


// Validação de Senha Forte:

function validarSenha() {

    let senha = prompt("Digite sua senha:");

    //  A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais
    //  A expressão regular é usada para definir os critérios da senha:
    //  ^: Indica que a correspondência deve começar no início da string.
    //  (?=.*[a-z]): Deve conter pelo menos uma letra minúscula.
    //  (?=.*[A-Z]): Deve conter pelo menos uma letra maiúscula.
    //  (?=.*\d): Deve conter pelo menos um número.
    //  (?=.*[@$!%*?&]): Deve conter pelo menos um caractere especial entre @$!%*?&.
    //  [A-Za-z\d@$!%*?&]{8,}: Permite letras (maiúsculas e minúsculas), números e caracteres especiais, com um comprimento mínimo de 8 caracteres.
    //  $: Indica que a correspondência deve ocorrer até o final da string.
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   // /  ^ (?=.*[a-z])  (?=.*[A-Z]) (?=.*\d) (?=.*[@$!%*?&])  [A-Za-z\d@$!%*?&]{8,}  $   /


    if (regex.test(senha)) {
        console.log("Senha válida.");
    } else {
        console.log("Senha inválida. Certifique-se de incluir maiúsculas, minúsculas, números e caracteres especiais.");
    }
}

validarSenha();



//   Validação de Opções:

function validarOpcao() {

    let opcao = prompt("Escolha uma opção (A, B ou C):");

    //  Apenas aceitar as opções A, B ou C, ignorando maiúsculas/minúsculas
    //  ^: Indica que a correspondência deve começar no início da string.
    //  [A-Ca-c]: Corresponde a qualquer caractere entre A e C (maiúsculos ou minúsculos).
    //  $: Indica que a correspondência deve ocorrer até o final da string.
    let regex = /^[A-Ca-c]$/;

    if (regex.test(opcao)) {
        console.log(`Você escolheu a opção ${opcao.toUpperCase()}.`);
    } else {
        console.log("Opção inválida. Por favor, escolha entre A, B ou C.");
    }
}

validarOpcao();


*/

/*
ATIVIDADES

1.  Crie um programa que leia os dados de um aluno: 
    nome, sobrenome, CPF (11 digitos), sexo (M-Masculino, F-Feminino, O-Outros), 
    data de nascimento, endereço e telefone (Formato (032) 0 0000-0000) e exiba no console.

2.  Crie um programa que leia o número de alunos de uma turma. 
    Após isso, o programa deve ler as notas das 2 avaliações de cada aluno e calcular e exibir: 
    o nome, a média de cada aluno e se o aluno foi aprovado ou reprovado. 
    Considere como média para aprovação 60 pontos ou mais. 

3.  Crie um programa que leia os dados de um grupo de 10 pessoas: 
    nome, sexo (M-Masculino, F-Feminino, P-Prefiro não dizer, O-Outros), 
    idade e estado civil (C-Casado(a), S-Solteiro(a) e V-Viúvo(a)), 
    exibindo ao final do programa: 
        - A média de idade do grupo 
        - A soma de todas as idades do grupo
        - De quem foi a maior idade lida, exiba todas as informações da pessoa
        - De quem foi a menor idade lida, exiba todas as informações da pessoa
        - Quantas pessoas tem mais de 20 anos, exiba todas as informações dessas pessoas 
        - Quantas pessoas tem menos de 10 anos, exiba todas as informações dessas pessoas
        - Quantas pessoas do sexo masculino, exiba todas as informações dessas pessoas 
        - Quantas pessoas do sexo feminino, exiba todas as informações dessas pessoas
        - Quantas pessoas se absteram de dizer o sexo ou marcaram outros, 
        exiba todas as informações dessas pessoas
        - Quantas pessoas são casadas, exiba todas as informações dessas pessoas 
        - Quantas pessoas são solteiras, exiba todas as informações dessas pessoas 
        - Quantas pessoas são viúvas, exiba todas as informações dessas pessoas 


*/