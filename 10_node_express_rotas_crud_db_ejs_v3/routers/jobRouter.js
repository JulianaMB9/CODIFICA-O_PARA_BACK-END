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


// ----------------------------------------------------------------------------------------------
// Integração API
// ----------------------------------------------------------------------------------------------

// Define uma rota GET para listar todas as vagas de emprego
// Quando uma solicitação GET é feita para "/job", o método readList() do controlador de vagas de emprego é chamado
router.get("/api/job", jobController.apiReadList);

// Define uma rota GET para ler uma vaga de emprego específica por ID
// Quando uma solicitação GET é feita para "/job/:id", o método read() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.get("/api/job/:id", jobController.apiRead);

// Define uma rota POST para criar uma nova vaga de emprego
// Quando uma solicitação POST é feita para "/job", o método create() do controlador de vagas de emprego é chamado
router.post("/api/job", jobController.apiCreate);

// Define uma rota PUT para atualizar uma vaga de emprego existente por ID
// Quando uma solicitação PUT é feita para "/job/:id", o método update() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.put("/api/job/:id", jobController.apiUpdate);

// Define uma rota DELETE para excluir uma vaga de emprego existente por ID
// Quando uma solicitação DELETE é feita para "/job/:id", o método delete() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.delete("/api/job/:id", jobController.apiDelete);


// ----------------------------------------------------------------------------------------------
// Integração Front End x Back End
// ----------------------------------------------------------------------------------------------

// Define uma rota GET para visualizar o formulário de criação de uma nova vaga de emprego
router.get("/job/create", jobController.viewCreate);

// Define uma rota GET para listar todas as vagas de emprego
router.get("/job", jobController.viewReadList);

// Define uma rota GET para visualizar o formulário de atualização de uma vaga de emprego existente
router.get("/job/update/:id", jobController.viewUpdate);

// Define uma rota GET para acessar a página inicial
router.get("/", jobController.viewHomePage);

// Define uma rota POST para ler uma vaga de emprego com base no que foi digitado na pesquisa
router.post("/job.search", jobController.search);

// Define uma rota POST para criar uma nova vaga de emprego
router.post("/job", jobController.create);

// Define uma rota POST para atualizar uma vaga de emprego existente por ID, onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.post("/job/:id", jobController.update);

// Define uma rota GET para realizar a exclusão de uma vaga de emprego existente
router.get("/job/delete/:id", jobController.delete);


// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
