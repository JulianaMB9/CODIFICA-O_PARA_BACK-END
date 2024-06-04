const http = require("http");

const httpServer = http.createServer(function (requisicao, resposta) {
  resposta.end("Seja bem vindo ao servidor ...");
});

// http://localhost:3000
const port = 3000;

//função para ouvir uma porta
httpServer.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro ao rodar o servidor! ");
    return;
  } else {
    console.log("Servidor está rodando com sucesso!");
  }
});
