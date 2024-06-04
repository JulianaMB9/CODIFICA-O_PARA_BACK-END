/*
    Programação Assíncrona:
    
    A programação assíncrona representa uma abordagem na qual as operações não interrompem 
    o fluxo de execução do programa. 
    Ao invés disso, possibilita que o programa prossiga executando outras tarefas simultaneamente, 
    enquanto aguarda a conclusão de uma operação específica. 
    
*/ 

/*
//  Operação de leitura de arquivo síncrona

//  Importa o módulo fs (File System) em Node.js. 
//  O módulo fs fornece métodos para interagir com o sistema de arquivos, como ler e escrever arquivos.
let fs = require('fs');

//  fs.readFileSync: É um método síncrono que lê o conteúdo de um arquivo de forma bloqueante. 
//  Isso significa que a execução do programa será pausada até que a operação de leitura seja concluída.
let conteudoArquivo = fs.readFileSync('arquivo.txt', 'utf-8');
console.log('Conteúdo do arquivo:' + conteudoArquivo);
console.log('\nMensagem exibida APÓS leitura e impressão do conteúdo do arquivo.\n');


*/


/*

//  Operação de leitura de arquivo assíncrona

//  Importa o módulo fs (File System) em Node.js. 
//  O módulo fs fornece métodos para interagir com o sistema de arquivos, como ler e escrever arquivos.
let fs = require('fs');

//  fs.readFile: É um método assíncrono que lê o conteúdo de um arquivo. 
//  Diferentemente do método síncrono (readFileSync), este não bloqueia a execução do programa, 
//  permitindo que outras operações continuem enquanto o arquivo é lido.
fs.readFile('arquivo.txt', 'utf-8', function (erro, conteudoArquivo) {
    if (erro) throw erro;
    console.log('Conteúdo do arquivo:' + conteudoArquivo);
  }
);

console.log('\nMensagem exibida ANTES leitura e impressão do conteúdo do arquivo.\n');

*/





/*

  Callback:

    O callback é uma função que é passada como argumento para outra função 
    e é executada após a conclusão de uma operação assíncrona ou de outra operação específica. 
    Ele permite que o código continue a ser executado enquanto a operação assíncrona 
    está em andamento e, quando essa operação é concluída, o callback é chamado.

*/

/*
console.log("Exibição de números:")
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
setTimeout(
  function() {
    console.log("Função Assíncrona executada!");
  }, 2000 );  // Delay de 2 segundos antes de exibir a mensagem
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");

*/

/*

// Callback em Leitura de Arquivo
let fs = require('fs');

function lerArquivo(caminhoArquivo, funcaoCallback) {

  fs.readFile(caminhoArquivo, 'utf-8', function (erro, conteudoArquivo) {

      //  O uso de null nos argumentos da função de callback é uma prática 
      //  comum para indicar que não houve erro na execução da operação assíncrona 
      //  quando a função é bem-sucedida.
      //  A convenção é utilizar o primeiro parâmetro do callback 
      //  para passar informações sobre erros, caso ocorram, 
      //  e o segundo parâmetro para transmitir o resultado da operação quando não há erros

      if (erro) {        
        funcaoCallback(erro, null);
      } else {
        funcaoCallback(null, conteudoArquivo);
      }

    });
}

// Uso do callback
lerArquivo('arquivo.txt', (erro, conteudoArquivo) => {
  if (erro) {
    console.error('Erro na leitura do arquivo:', erro.message);
  } else {
    console.log('Conteúdo do arquivo: ' + conteudoArquivo);
  }
});



*/


/*

  Promises
  Promises são objetos em JavaScript que representam a conclusão ou 
  falha eventual de uma operação assíncrona. 
  Em comparação com os callbacks, elas fornecem uma maneira mais 
  estruturada de lidar com operações assíncronas.

  A construção de uma Promise envolve a criação de uma instância usando o construtor Promise. 
  Essa instância recebe uma função executora com dois parâmetros: resolve e reject. 
  resolve é usado para indicar que a Promise foi concluída com sucesso, 
  enquanto reject é usado para indicar um erro.

  As Promises têm três estados: pending (pendente), resolved (resolvida) e rejected (rejeitada). 
  O estado inicial é pending. Quando a operação é bem-sucedida, 
  a Promise entra no estado resolved; caso contrário, entra no estado rejected.

*/

/*

// Função que retorna uma Promise que será resolvida ou rejeitada após um atraso de 2 segundos
function chamarPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // Math.random() gera um número decimal entre 0 e 1
      const sucesso = Math.random() > 0.5; 

      if (sucesso) {
        // Se bem-sucedido, a Promise é resolvida com a mensagem 'Sucesso!'
        resolve('Sucesso!');
      } else {
        // Se falhar, a Promise é rejeitada com um objeto de erro
        reject(new Error('Erro!'));
      }
    }, 2000); // Delay de 2 segundos antes de resolver ou rejeitar a Promise
  });
}


// Chama a função que retorna a Promise
chamarPromise()
  // O método .then() é utilizado quando a Promise é resolvida com sucesso
  .then(function (resultado) {
    console.log('Resolvido:', resultado);
  })
  // O método .catch() é utilizado para lidar com erros quando a Promise é rejeitada
  .catch(function (erro) {
    console.error('Rejeitado:', erro.message);
  });


*/

/*
// Criando uma Promise resolvida com o valor 5
let p = Promise.resolve(5);
console.log("Outros códigos");
console.log(p);
// Encadeando duas operações assíncronas usando .then()
p.then(function (value) { 
  // Primeira função de transformação: adiciona 5 ao valor resolvido pela Promise
  return value + 5; 
})
.then(function (value) { 
  // Segunda função de transformação: exibe o resultado após a primeira transformação
  console.log(value); 
})
.catch(function (erro) { 
  console.log(erro); 
});

 
*/


/*

// Função que retorna uma Promise
function verificarNumero(numero) {
  return new Promise(function (resolve, reject) {
    if (numero == 2) {
      // Se o número for 2, a Promise é resolvida com uma mensagem
      resolve(console.log(`O numero é ${numero}!`));
    } else {
      // Se o número não for 2, a Promise é rejeitada com um objeto de erro
      reject(new Error("Falha - Promisse rejeitada!"));
    }
  });
}


//verificarNumero(2); 
verificarNumero(3); 

*/



/*

// Promisse com Erro - Falha

// Criando uma Promise resolvida com um objeto de erro
let p = Promise.resolve(new Error("Ocorreu um erro na promisse!"));

console.log("Iniciando o meu programa...");

// Trata a promessa resolvida (que contém um erro) usando .then() e .catch()
p.then(function (resultado) {
    console.log("Resolvida: " + resultado);
    return new Error("Ocorreu um erro na promisse!")
  })
  .then(function (resultado) {
    console.log("Resolvida 2: " + resultado);
  })
  .catch(function (erro) {
      return console.log("Rejeitada: " + erro);
  });

*/


 
/*

// Promisse All

// Promise que será resolvida após um atraso de 5 segundos
const p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(15);
  }, 5000);
});

// Promise que é imediatamente resolvida com o valor 10
const p2 = Promise.resolve(10);

// Promise que é imediatamente resolvida com o valor 12
const p3 = new Promise((resolve, reject) => {
  resolve(12);
});



// O método Promise.all() é um método que recebe um array de Promises como argumento e retorna uma nova Promise.
Promise.all([p1, p2, p3])
  .then(function (values) {
    return console.log(values);
  });

*/




/*
  Async/Await

  Async/Await é uma forma de lidar com operações assíncronasde uma maneira mais síncrona e legível. 
  Isso ocorre utilizando as palavras-chave async e await. 
  
  Async é utilizado para definir uma função como assíncrona. 
  Enquanto Await é usado dentro dessa função para aguardar a resolução de uma Promise, 
  pausando a execução até que a Promise seja resolvida ou rejeitada.

*/

/*

// Async

// Função assíncrona que retorna a soma de dois números
async function somar(a, b) {
  // O operador '+' é utilizado para realizar a soma dos dois argumentos
  return a + b;
}

// Chama a função somar diretamente e imprime o resultado no console
console.log(somar(2, 4));

// Chama a função somar utilizando .then() para lidar com a Promise retornada
somar(2, 4).then(function (value) {
  // Imprime o valor retornado pela Promise no console
  return console.log(value);
});


*/

/*


// Função que retorna uma Promise que será resolvida ou rejeitada após um atraso de 2 segundos
function chamarPromisse() {
  return new Promise(function (resolve, reject) {
    
    setTimeout(() => {
      // Math.random() gera um número decimal entre 0 e 1
      const sucesso = Math.random() > 0.5; 

      if (sucesso) {
        // Se bem-sucedido, a Promise é resolvida com a mensagem 'Sucesso!'
        resolve('Sucesso!');
      } else {
        // Se falhar, a Promise é rejeitada com um objeto de erro
        reject(new Error('Erro!'));
      }
    }, 2000); // Delay de 2 segundos antes de resolver ou rejeitar a Promise
  });
}

// Função assíncrona que chama a função chamarPromisse usando await
async function executaChamada() {
  let resultado;

  try {
    // Aguarda a conclusão da função assíncrona usando await
    resultado = await chamarPromisse();
    console.log('Resolvido:', resultado);
  } catch (erro) {
    // Captura qualquer erro que ocorra durante a execução da função assíncrona
    console.error('Rejeitado:', erro.message);
  }
}

// Chama a função assíncrona para iniciar o processo
executaChamada();




//  Await

// Função que retorna uma Promise com a soma de dois valores após um atraso de 4 segundos
function somaComDelay(a, b) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(a + b);
    }, 4000);
  });
}

// Função assíncrona que utiliza a função somaComDelay e retorna a soma com um terceiro valor
async function resSoma(a, b, c) {
  // Aguarda a conclusão da Promise retornada por somaComDelay
  let x = await somaComDelay(a, b);
  let y = c;

  // Retorna a soma dos valores após a conclusão das operações assíncronas
  return x + y;
}

// Chama a função assíncrona resSoma com os valores 1, 2 e 3 e imprime o resultado quando concluído
resSoma(1, 2, 3).then(value => console.log(value));

*/


/*

// Exemplo 1: Função assíncrona simples com await
async function exemploAsyncAwait() {
  console.log("Início da função assíncrona");

  // Aguarda a resolução da Promise após 2 segundos
  const resultado1 = await delay(2000);
  console.log("Resultado 1:", resultado1);

  // Aguarda a resolução da Promise após 1 segundo
  const resultado2 = await delay(1000);
  console.log("Resultado 2:", resultado2);

  console.log("Fim da função assíncrona");
}

// Função que retorna uma Promise com um atraso
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Chamada da função assíncrona
exemploAsyncAwait();


*/

/*

// Generators fornecem uma maneira de criar iteradores de forma mais simples e elegante, permitindo a suspensão e retomada da execução de uma função.

// Função geradora que cria um iterador para gerar IDs incrementais
// Para criar um generator, você usa a sintaxe function*
function* criadorId() {
  let id = 0;
  // O loop infinito continuará gerando IDs indefinidamente
  while (true) {
    // A palavra-chave yield interrompe a execução e retorna o valor atual de id
    //O ponto principal de um generator é a palavra-chave yield. O yield pausa a execução da função e retorna um valor para o chamador do método next().
    yield id++;
  }
}

// Cria um iterador chamando a função geradora
let criaId = criadorId();

// Imprime no console os valores gerados pelo iterador usando o método next()
console.log(criaId.next().value); // 0
console.log(criaId.next().value); // 1
console.log(criaId.next().value); // 2
console.log(criaId.next().value); // 3
console.log(criaId.next().value); // 4
console.log(criaId.next().value); // 5
console.log(criaId.next().value); // 6

// O método next() retorna um objeto com a propriedade value e done
console.log(criaId.next());



function* contadorInfinito() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const meuContador = contadorInfinito();
console.log(meuContador.next().value); // 0
console.log(meuContador.next().value); // 1
console.log(meuContador.next().value); // 2



*/

