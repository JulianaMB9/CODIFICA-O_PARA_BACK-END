let fs = require('fs');

function salvarArquivo() {
    const textoArquivo = document.getElementById("textoArquivo").value;
    let resultado = document.getElementById("resultado");
  

    fs.writeFile("arquivo.txt", textoArquivo, "utf-8", function (erro) {
      if (erro) {
        console.error("Erro ao salvar o arquivo:", erro.message);
      } else {
        console.log("Arquivo salvo com sucesso!");
      }
    });
  
    fs.readFile("arquivo.txt", "utf-8", function (erro, conteudoArquivo) {
      if (erro) {
        console.error('Erro na leitura do arquivo:', erro.message);
      } else {
        resultado.innerHTML = "<p>Conteúdo do Arquivo:</p><p>" + conteudoArquivo + "</p>";
      }
    });
  }
  