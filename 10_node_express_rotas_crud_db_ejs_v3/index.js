// Importa o módulo Express
const express = require("express");

//  Cria uma instância do aplicativo Express
const app = express();

//  Define a porta em que o servidor será executado
//  Dessa forma, o servidor será acessível em http://localhost:3000
const port = 3000;


// Importa e executa a função do módulo 'database' localizado no diretório 'db'
const database = require("./db/index.js");
database();

// Define a engine de visualização como EJS
// EJS é uma linguagem de modelagem que permite a incorporação de código JavaScript dentro de arquivos HTML, facilitando a geração de conteúdo dinâmico. 
// Ao definir 'view engine' como 'ejs', o Express será capaz de usar arquivos EJS para renderizar as respostas às requisições do cliente.
app.set('view engine', 'ejs');

// Importa o módulo express-session
const session = require("express-session");

// Configura a sessão do aplicativo, especificando algumas opções como:
// - "secret" é uma chave secreta usada para assinar a sessão, garantindo a sua segurança.
// - "saveUninitialized" é um valor booleano que define se a sessão deve ser salva mesmo que ela não tenha sido modificada.
// - "resave" é um valor booleano que define se a sessão deve ser salva novamente mesmo que ela não tenha sido modificada.
app.use(session({
  secret: 'secretKey',
  saveUnitialized: true,
  resave: false,
}));

// Define um middleware, função que será executada em todas as rotas da aplicação. 
// O middleware recebe três parâmetros: 
// req (a requisição HTTP), res (a resposta HTTP) e next (uma função que passa o controle para o próximo middleware na cadeia de execução).
app.use( (req, res, next) => {
  // Define uma nova propriedade message no objeto res.locals
  // res.locals é um objeto que pode ser usado para armazenar dados locais que são acessíveis nos templates de visualização (como o ejs).
  // req.session é um objeto que representa a sessão do usuário. Atribui-se o valor de req.session.message à propriedade message e, em seguida, exclui o valor de req.session.message
  res.locals.message = req.session.message;
  delete req.session.message;
  // A função next() é chamada para continuar o processamento da requisição.
  next();
});


// Importa o módulo 'index.js' localizado no diretório 'routers' e atribui à variável 'router'
const router = require("./routers/index.js");

// Chama a função exportada pelo módulo 'index.js' e passa a instância do Express como argumento
// Adicionando as rotas definidas ao aplicativo Express
router(app, express);

// A função .listen() é uma função do Express que inicia o servidor
// E começa a ouvir em uma porta específica.
app.listen(
  port, // O primeiro argumento é a porta em que o servidor irá ouvir
  function (error) {
    // O segundo argumento é uma função de callback que será executada
    // Assim que o servidor estiver pronto para aceitar conexões.
    // Essa função de callback é chamada quando o servidor é iniciado.

    // O parâmetro error é passado para a função, e este parâmetro conterá um valor
    // Caso ocorra algum erro durante a inicialização do servidor.
    if (error) {
      // Se ocorreu um erro, exibe uma mensagem de erro
      console.log("Ocorreu um erro ao rodar o servidor!");
      return;
    } else {
      // Se não ocorreu erro, exibe uma mensagem de sucesso
      console.log("Servidor rodando com sucesso!");
    }
  }
);
