const express = require("express");

const app = express();

const port = 3000;

app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro ao rodar o servidor! ");
    return;
  } else {
    console.log("Servidor está rodando com sucesso!");
  }
});
