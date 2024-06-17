const Router = require("express").Router;

const router = Router();

class Pessoa {
  constructor(pessoas) {
    this.pessoas = pessoas;
  }

  readList() {
    return this.pessoas;
  }

  read(id) {
    const pessoa = this.pessoas.find((pessoa) => pessoa.id === parseInt(id));
    return pessoa;
  }

  create(newPessoa) {
    const index = this.pessoas.findIndex(
      (pessoa) => pessoa.id === parseInt(newPessoa.id)
    );

    if (index !== -1) {
      newPessoa.id = this.pessoas.length + 1;
    }
    this.pessoas.push(newPessoa);
    return newPessoa;
  }

  update(updatePessoa, id) {
    const index = this.pessoas.findIndex(
      (pessoa) => pessoa.id === parseInt(id)
    );

    if (index !== -1) {
      this.pessoas[index] = updatePessoa;
      return this.pessoas[index];
    }
    return false;
  }

  delete(id) {
    const index = this.pessoas.findIndex(
      (pessoa) => pessoa.id === parseInt(id)
    );

    if (index !== -1) {
      this.pessoas.splice(index, 1);
      return true;
    }
    return false;
  }
}

let pessoas = new Pessoa([
  { id: 1, nome: "Juliana", idade: 24, casado: true },
  { id: 2, nome: "Maria", idade: 20, casado: false },
  { id: 3, nome: "Joao", idade: 22, casado: false },
  { id: 4, nome: "Vitor", idade: 26, casado: true },
  { id: 5, nome: "Mariana", idade: 28, casado: true },
]);

router.get("/", function (req, res) {
  res.send("Olá ......");
});

router.get("/pessoas", function (req, res) {
  try {
    let result = pessoas.readList();

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Nenhuma pessoa foi encontrada");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/pessoas/:id", function (req, res) {
  const { id } = req.params;

  try {
    let result = pessoas.read(id);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("pessoa não encontrada");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/pessoas", function (req, res) {
  try {
    const newPessoa = req.body;
    pessoas.create(newPessoa);
    res.status(201).send("pessoa criada com sucesso");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.put("/pessoas/:id", function (req, res) {
  try {
    const { id } = req.params;
    const updatedPessoa = req.body;

    let result = pessoas.update(updatedPessoa, id);
    if (result) {
      res.status(200).send("pessoa atualizada com sucesso!");
    } else {
      res.status(404).send("pessoa não encontrada");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.delete("/pessoas/:id", function (req, res) {
  try {
    const { id } = req.params;

    let result = pessoas.delete(id);

    if (result) {
      res.status(200).send("pessoa deletada com sucesso!");
    } else {
      res.status(404).send("pessoa não encontrada");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
