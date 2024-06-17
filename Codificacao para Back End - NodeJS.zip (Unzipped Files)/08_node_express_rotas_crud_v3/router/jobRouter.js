const Router = require("express").Router;

const router = Router();

//importa o controlador
const jobController = require("../controllers/jobController.js");

//para exibir uma lista com todas as vagas de emprego
router.get("/job" /*caminho*/, jobController.readList());
router.get("/job/:id" /*caminho*/, jobController.read());
router.post("/job", jobController.create());
router.put("/job/:id" /*caminho*/, jobController.create());
router.delete("/job/:id" /*caminho*/, jobController.delete());

module.exports = router;
