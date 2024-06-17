// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe pessoasModel para manipular operações relacionadas às vagas de emprego no banco de dados
class pessoasModel {

  // Método para executar consultas SQL no banco de dados
  executeSQL(sql, parameters = "") {
    // Retorna uma Promise que representa a execução da consulta SQL
    return new Promise( function (resolve, reject) {
        
        // Executa a consulta SQL utilizando a conexão com o banco de dados e os parâmetros fornecidos
        dbConnection.query(sql, parameters, function (error, resposta) {
          // Se ocorrer um erro durante a execução da consulta, rejeita a Promise com o erro
          if (error) {
            return reject(error);
          }
          // Se a consulta for bem-sucedida, resolve a Promise com a resposta do banco de dados
          return resolve(resposta);
        });

      }
    );
  }

 
  // ----------------------------------------------------------------------------------------------
  // Integração API
  // ----------------------------------------------------------------------------------------------

  // Método para obter a lista de todas as vagas de emprego no banco de dados
  apiReadList() {
    const sql = "SELECT id, nome, salario FROM pessoas"; // Consulta SQL para selecionar todas as vagas de emprego
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma vaga de emprego específica por ID no banco de dados
  apiRead(id) {
    const sql = "SELECT id, nome, salario FROM pessoas WHERE id = ?"; // Consulta SQL para selecionar uma vaga de emprego por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova vaga de emprego no banco de dados
  apiCreate(newpessoas) {
    const sql = "INSERT INTO pessoas SET ?"; // Consulta SQL para inserir uma nova vaga de emprego
    return this.executeSQL(sql, newpessoas); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma vaga de emprego existente por ID no banco de dados
  apiUpdate(updatedpessoas, id) {
    const sql = "UPDATE pessoas SET ? WHERE id = ?"; // Consulta SQL para atualizar uma vaga de emprego por ID
    return this.executeSQL(sql, [updatedpessoas, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma vaga de emprego existente por ID no banco de dados
  apiDelete(id) {
    const sql = "DELETE FROM pessoas WHERE id = ?"; // Consulta SQL para excluir uma vaga de emprego por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  
  // ----------------------------------------------------------------------------------------------
  // Integração Front End x Back End
  // ----------------------------------------------------------------------------------------------
  
  // Método para obter a lista de todas as vagas de emprego no banco de dados
  readList() {
    const sql = "SELECT id, nome, salario FROM pessoas"; // Consulta SQL para selecionar todas as vagas de emprego
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma vaga de emprego específica por ID no banco de dados
  read(id) {
    const sql = "SELECT id, nome, salario FROM pessoas WHERE id = ?"; // Consulta SQL para selecionar uma vaga de emprego por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova vaga de emprego no banco de dados
  create(newpessoas) {
    const sql = "INSERT INTO pessoas (nome, salario) VALUES (?, ?)"; // Consulta SQL corrigida para inserir uma nova vaga de emprego
    const values = [newpessoas.name, newpessoas.salary]; // Valores a serem inseridos na consulta SQL
    return this.executeSQL(sql, values); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma vaga de emprego existente por ID no banco de dados
  update(updatedpessoas, id) {
    const sql = "UPDATE pessoas SET nome = ?, salario = ? WHERE id = ?"; // Consulta SQL para atualizar uma vaga de emprego por ID
    const values = [updatedpessoas.name, updatedpessoas.salary, id]; // Valores a serem inseridos na consulta SQL
    return this.executeSQL(sql, values); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma vaga de emprego existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM pessoas WHERE id = ?"; // Consulta SQL para excluir uma vaga de emprego por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter a lista de todas as vagas de emprego no banco de dados com base no que foi digitado no campo de pesquisa
  search(pesquisa){
    const sql = "SELECT id, nome, salario FROM pessoas WHERE nome like ? or salario like ? ";
    return this.executeSQL(sql, [pesquisa, pesquisa]);    
  }

}

// Exporta uma instância da classe pessoasModel para ser utilizada em outros arquivos do projeto
module.exports = new pessoasModel();
