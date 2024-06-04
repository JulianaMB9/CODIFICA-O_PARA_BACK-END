const Router = require("express").Router;

const router = Router();

router.get("/job", function (req, res) {
  res.send("Exibindo uma lista com todas as vagas de emprego ...");
});

router.get("/job/:id", function (req, res) {
  const { id } = req.params;

  res.send("Exibindo uma vaga de emprego exixtente. ID = " + id + "...");
});

router.post("/job", function (req, res) {
  res.send("Criando uma nova vaga de emprego...");
});

router.put("/job/:id", function (req, res) {
  const { id } = req.params;

  res.send("Atualizando uma vaga de emprego exixtente. ID = " + id + "...");
});

router.delete("/job/:id", function (req, res) {
  const { id } = req.params;

  res.send("Deletando uma vaga de emprego exixtente. ID = " + id + "...");
});

module.exports = router;
