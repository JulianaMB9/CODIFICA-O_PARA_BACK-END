// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Importa o controlador de vagas de emprego
const jobController = require("../controllers/jobController");

// Define uma rota GET para listar todas as vagas de emprego
// Quando uma solicitação GET é feita para "/job", o método readList() do controlador de vagas de emprego é chamado
router.get("/job", jobController.readList);

// Define uma rota GET para ler uma vaga de emprego específica por ID
// Quando uma solicitação GET é feita para "/job/:id", o método read() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.get("/job/:id", jobController.read);

// Define uma rota POST para criar uma nova vaga de emprego
// Quando uma solicitação POST é feita para "/job", o método create() do controlador de vagas de emprego é chamado
router.post("/job", jobController.create);

// Define uma rota PUT para atualizar uma vaga de emprego existente por ID
// Quando uma solicitação PUT é feita para "/job/:id", o método update() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.put("/job/:id", jobController.update);

// Define uma rota DELETE para excluir uma vaga de emprego existente por ID
// Quando uma solicitação DELETE é feita para "/job/:id", o método delete() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.delete("/job/:id", jobController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
