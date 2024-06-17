const Router = require("express").Router;

const router = Router();

const jobController = require("../controllers/jobController.js");

router.get("/job", jobController.readList);

router.get("/job/:id", jobController.read);

router.post("/job", jobController.create);

router.put("/job/:id", jobController.update);

router.delete("/job/:id", jobController.delete);

module.exports = router;