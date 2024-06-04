// Importando o módulo 'fs' (file system) do Node.js, que permite operações com arquivos.
let fs = require('fs');

//  fs.readFile: É um método assíncrono que lê o conteúdo de um arquivo. 
fs.readFile('arquivo.txt', 'utf-8', function (erro, conteudoArquivo) {
    if (erro) throw new erro;
    console.log('Conteúdo do arquivo:\n' + conteudoArquivo);
  }
);
