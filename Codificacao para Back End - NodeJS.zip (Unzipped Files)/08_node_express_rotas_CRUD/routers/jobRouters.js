const Router = require("express").Router;

const router = Router();

class job {
  constructor(jobs) {
    this.jobs = jobs;
  }
  readList() {
    return [this.jobs];
  }
  read(id) {
    const job = this.jobs.find((job) => job.id === parseInt(id));
    return job;
  }
  create(newJob) {
    const index = this.jobs.findIndex((job) => job.id === parseInt(newJob.id));

    if (index !== -1) {
      newJob.id = this.jobs.length + 1;
    }
    this.jobs.push(newJob);
    return newJob;
  }
  update(updateJob, id) {
    const index = this.jobs.findIndex((job) => job.id === parseInt(id));
    if (index !== -1) {
      this.jobs[index] = updateJob;
      return this.jobs[index];
    }
    return false;
  }
  delete(id) {
    const index = this.jobs.findIndex((job) => job.id === parseInt(id));

    if (index !== -1) {
      this.jobs.splice(index, 1);
      return true;
    }
    return false;
  }
}

let jobs = new job([
  { id: 1, nome: "desenvolvedor Back End", salario: 1500.0 },
  { id: 2, nome: "desenvolvedor Front End", salario: 1500.0 },
  { id: 3, nome: "desenvolvedor Full Stack", salario: 2000.0 },
]);

router.get("/", function (req, res) {
  res.send("Olá ......");
});
router.get("/job", function (req, res) {
  try {
    let result = jobs.readList();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Nenhuma vaga de emprego foi emcontrada");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/job/:id", function (req, res) {
  const { id } = req.params;

  try {
    let result = jobs.read(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Vaga de emprego não encontrada");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/job", function (req, res) {
  try {
    const newJob = req.body;
    jobs.create(newJob);
    res.status(201).send("vaga de emprego criada com sucesso");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.put("/job/:id", function (req, res) {
  try {
    const { id } = req.params;
    const updatedJob = req.body;

    let result = jobs.update(updatedJob, id);
    if (result) {
      res.status(200).send("Vaga de emprego atualizada com sucesso!");
    } else {
      res.status(404).send("Vaga de emprego não encontrada");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.delete("/job/:id", function (req, res) {
  try {
    const { id } = req.params;

    let result = jobs.delete(id);
    if (result) {
      res.status(200).send("Vaga de emprego deletada com sucesso!");
    } else {
      res.status(404).send("Vaga de emprego não encontrada");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
