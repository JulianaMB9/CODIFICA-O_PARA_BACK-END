const express = require("express");

const app = express();

const port = 3000;

const router = require("./routes/index.js");

router(app, express);

app.listen(port, erro => {
    if(erro) {
        console.log("Ocorreu um erro ao executar o servidor!");
    } else {
        console.log("Servindo executado com sucesso!");
    }
});