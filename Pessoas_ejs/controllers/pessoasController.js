const pessoasModel = require("../models/pessoasModel");

class PessoasController {

  apiReadList(req, res) {
  
    const retorno = pessoasModel.apiReadList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }


  apiRead(req, res) {
    const { id } = req.params;
    const retorno = pessoasModel.apiRead(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Vaga de emprego não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  apiCreate(req, res) {
    const reqBody = req.body; 
    const retorno = pessoasModel.apiCreate(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Vaga de emprego criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  apiUpdate(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = pessoasModel.apiUpdate(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Vaga de emprego atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  apiDelete(req, res) {
    const { id } = req.params;
    const retorno = pessoasModel.apiDelete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Vaga de emprego deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  viewCreate(req, res) {
    return res.status(200).render("./pessoas/pessoas_create", { title: "Adicionar Pessoa" });
  }

  viewReadList(req, res) {
    const pessoassList = pessoasModel.readList();
    return pessoassList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./pessoas/pessoas_read", { title: "Pessoas", pessoass: result, search: '' })
          : res.status(200).render("./pessoas/pessoas_read", { title: "Pessoas", pessoass: result, search: '' })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  viewUpdate(req, res) {
    const { id } = req.params;
    const pessoas = pessoasModel.read(id);
    return pessoas
      .then((result) =>
        result.length == 0
          ? res.status(404).redirect("/")
          : res.status(200).render("./pessoas/pessoas_update", { title: "Atualizar Vaga de Emprego", pessoass: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }


  viewHomePage(req, res) {
    return res.status(200).render("./index", { title: "Página Inicial"});
  }


  create(req, res) {
    // Obtém os dados da nova vaga de emprego do corpo da requisição
    const newpessoas = req.body;
    // Chama a função create() do modelo pessoasModel para criar uma nova vaga de emprego
    const pessoas = pessoasModel.create(newpessoas);
    return pessoas
      .then((result) => {
        // Define uma mensagem de sucesso na sessão
        req.session.message = {
          type: "success",
          message: "Vaga de Emprego criada com sucesso!",
        }
        // Redireciona para a página de Pessoas
        return res.status(201).redirect("./pessoas");
      })
      .catch((error) => {
        // Define uma mensagem de erro na sessão
        req.session.message = {
          type: "danger",
          message: error.message,
        }
        // Redireciona para a página de Pessoas
        return res.status(400).redirect("./pessoas");
      });    
  }

  // Método para atualizar uma vaga de emprego existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da vaga de emprego do corpo da requisição
    const updatedpessoas = req.body;
    // Chama a função update() do modelo pessoasModel para atualizar a vaga de emprego com o ID fornecido
    const pessoas = pessoasModel.update(updatedpessoas, id);
    return pessoas
      .then((result) => {
        // Define uma mensagem de sucesso na sessão
        req.session.message = {
          type: "success",
          message: "Vaga de Emprego atualizada com sucesso!",
        }
        // Redireciona para a página de Pessoas
        return res.status(200).redirect("../../pessoas");
      })
      .catch((error) => {
        // Define uma mensagem de erro na sessão
        req.session.message = {
          type: "danger",
          message: error.message,
        }
        // Redireciona para a página de Pessoas
        return res.status(400).redirect("../../pessoas");
      });     
  }

  // Método para excluir uma vaga de emprego existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo pessoasModel para excluir a vaga de emprego com o ID fornecido
    const pessoas = pessoasModel.delete(id);
    return pessoas
      .then((result) => {
        // Define uma mensagem de sucesso na sessão
        req.session.message = {
          type: "success",
          message: "Vaga de Emprego excluída com sucesso!",
        }
        // Redireciona para a página de Pessoas
        return res.status(200).redirect("../../pessoas");
      })
      .catch((error) => {
        // Define uma mensagem de erro na sessão
        req.session.message = {
          type: "danger",
          message: error.message,
        }
        // Redireciona para a página de Pessoas
        return res.status(400).redirect("../../pessoas");
      });  
  }

  search(req, res) {

    const pesquisa  = '%' + req.body.search + '%';
    const pessoassList = pessoasModel.search(pesquisa);
    return pessoassList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./pessoas/pessoas_read", { title: "Pessoas", pessoass: result, search: req.body.search })
          : res.status(200).render("./pessoas/pessoas_read", { title: "Pessoas", pessoass: result, search: req.body.search })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

}

module.exports = new PessoasController();
