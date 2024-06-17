// Importa o modelo de Job (vaga de emprego) para acessar as operações CRUD relacionadas a empregos
const jobModel = require("../models/jobModel");

// Define a classe JobController, responsável por controlar as operações relacionadas a empregos
class JobController {
  // Método para ler a lista de todas as vagas de emprego
  readList(req, res) {
    // Chama a função readList() do modelo jobModel para obter a lista de vagas de emprego
    const retorno = jobModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma vaga de emprego específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo jobModel para obter a vaga de emprego com o ID fornecido
    const retorno = jobModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Vaga de emprego não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova vaga de emprego
  create(req, res) {
    // Obtém os dados da nova vaga de emprego do corpo da requisição
    const reqBody = req.body; 
    // Chama a função create() do modelo jobModel para criar uma nova vaga de emprego
    const retorno = jobModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Vaga de emprego criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma vaga de emprego existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da vaga de emprego do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função update() do modelo jobModel para atualizar a vaga de emprego com o ID fornecido
    const retorno = jobModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Vaga de emprego atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma vaga de emprego existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo jobModel para excluir a vaga de emprego com o ID fornecido
    const retorno = jobModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Vaga de emprego deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
}

// Exporta uma instância da classe JobController para ser utilizada em outros arquivos do projeto
module.exports = new JobController();
