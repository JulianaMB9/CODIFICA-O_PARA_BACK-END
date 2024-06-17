// Importa o modelo de Job (vaga de emprego) para acessar as operações CRUD relacionadas a empregos
const jobModel = require("../models/jobModel");

// Define a classe JobController, responsável por controlar as operações relacionadas a empregos
class JobController {
 
  // ----------------------------------------------------------------------------------------------
  // Integração API
  // ----------------------------------------------------------------------------------------------

  // Método para ler a lista de todas as vagas de emprego
  apiReadList(req, res) {
    // Chama a função apiReadList() do modelo jobModel para obter a lista de vagas de emprego
    const retorno = jobModel.apiReadList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma vaga de emprego específica por ID
  apiRead(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função apiRead() do modelo jobModel para obter a vaga de emprego com o ID fornecido
    const retorno = jobModel.apiRead(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Vaga de emprego não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova vaga de emprego
  apiCreate(req, res) {
    // Obtém os dados da nova vaga de emprego do corpo da requisição
    const reqBody = req.body; 
    // Chama a função apiCreate() do modelo jobModel para criar uma nova vaga de emprego
    const retorno = jobModel.apiCreate(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Vaga de emprego criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma vaga de emprego existente por ID
  apiUpdate(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da vaga de emprego do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função apiUpdate() do modelo jobModel para atualizar a vaga de emprego com o ID fornecido
    const retorno = jobModel.apiUpdate(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Vaga de emprego atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma vaga de emprego existente por ID
  apiDelete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função apiDelete() do modelo jobModel para excluir a vaga de emprego com o ID fornecido
    const retorno = jobModel.apiDelete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Vaga de emprego deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  
  // ----------------------------------------------------------------------------------------------
  // Integração Front End x Back End
  // ----------------------------------------------------------------------------------------------

  // Método para visualizar o formulário de criação de uma nova vaga de emprego
  viewCreate(req, res) {
    return res.status(200).render("./job/job_create", { title: "Adicionar Vaga de Emprego" });
  }
  
  // Método para listar todas as vagas de emprego
  viewReadList(req, res) {
    // Chama a função readList() do modelo jobModel para obter a lista de vagas de emprego
    const jobsList = jobModel.readList();
    return jobsList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./job/job_read", { title: "Vagas de Emprego", jobs: result, search: '' })
          : res.status(200).render("./job/job_read", { title: "Vagas de Emprego", jobs: result, search: '' })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  // Método para visualizar o formulário de atualização de uma vaga de emprego existente
  viewUpdate(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo jobModel para obter a vaga de emprego com o ID fornecido
    const job = jobModel.read(id);
    return job
      .then((result) =>
        result.length == 0
          ? res.status(404).redirect("/")
          : res.status(200).render("./job/job_update", { title: "Atualizar Vaga de Emprego", jobs: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  // Método para visualizar a página inicial
  viewHomePage(req, res) {
    return res.status(200).render("./index", { title: "Página Inicial"});
  }

  // Método para criar uma nova vaga de emprego
  create(req, res) {
    // Obtém os dados da nova vaga de emprego do corpo da requisição
    const newJob = req.body;
    // Chama a função create() do modelo jobModel para criar uma nova vaga de emprego
    const job = jobModel.create(newJob);
    return job
      .then((result) => {
        // Define uma mensagem de sucesso na sessão
        req.session.message = {
          type: "success",
          message: "Vaga de Emprego criada com sucesso!",
        }
        // Redireciona para a página de vagas de emprego
        return res.status(201).redirect("./job");
      })
      .catch((error) => {
        // Define uma mensagem de erro na sessão
        req.session.message = {
          type: "danger",
          message: error.message,
        }
        // Redireciona para a página de vagas de emprego
        return res.status(400).redirect("./job");
      });    
  }

  // Método para atualizar uma vaga de emprego existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da vaga de emprego do corpo da requisição
    const updatedJob = req.body;
    // Chama a função update() do modelo jobModel para atualizar a vaga de emprego com o ID fornecido
    const job = jobModel.update(updatedJob, id);
    return job
      .then((result) => {
        // Define uma mensagem de sucesso na sessão
        req.session.message = {
          type: "success",
          message: "Vaga de Emprego atualizada com sucesso!",
        }
        // Redireciona para a página de vagas de emprego
        return res.status(200).redirect("../../job");
      })
      .catch((error) => {
        // Define uma mensagem de erro na sessão
        req.session.message = {
          type: "danger",
          message: error.message,
        }
        // Redireciona para a página de vagas de emprego
        return res.status(400).redirect("../../job");
      });     
  }

  // Método para excluir uma vaga de emprego existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo jobModel para excluir a vaga de emprego com o ID fornecido
    const job = jobModel.delete(id);
    return job
      .then((result) => {
        // Define uma mensagem de sucesso na sessão
        req.session.message = {
          type: "success",
          message: "Vaga de Emprego excluída com sucesso!",
        }
        // Redireciona para a página de vagas de emprego
        return res.status(200).redirect("../../job");
      })
      .catch((error) => {
        // Define uma mensagem de erro na sessão
        req.session.message = {
          type: "danger",
          message: error.message,
        }
        // Redireciona para a página de vagas de emprego
        return res.status(400).redirect("../../job");
      });  
  }

  // Método para pesquisar uma vaga de emprego
  search(req, res) {
    // Obtém o valor digitado no campo de pesquisa
    const pesquisa  = '%' + req.body.search + '%';
    // Chama a função search() do modelo jobModel para obter a lista de vagas de emprego com base no que foi digitado no campo de pesquisa
    const jobsList = jobModel.search(pesquisa);
    return jobsList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./job/job_read", { title: "Vagas de Emprego", jobs: result, search: req.body.search })
          : res.status(200).render("./job/job_read", { title: "Vagas de Emprego", jobs: result, search: req.body.search })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

}

// Exporta uma instância da classe JobController para ser utilizada em outros arquivos do projeto
module.exports = new JobController();
