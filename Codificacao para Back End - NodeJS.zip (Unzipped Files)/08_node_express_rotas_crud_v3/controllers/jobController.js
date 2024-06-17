const jobModel = require("../models/jobModel.js");


class JobController {

    readList(req, res) {
        try {
            let arrayTodosJobs = jobModel.readList();
            if (arrayTodosJobs) {
                res.status(200).json(arrayTodosJobs);
            } else {
                res.status(404).send("Nenhuma vaga encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    read(req, res) {

        try {
            const { id } = req.params;
            let arrayJobEspecifico = jobModel.read(id);
            if (arrayJobEspecifico) {
                res.status(200).json(arrayJobEspecifico);
            } else {
                res.status(404).send("nenhuma vaga encontrada");

            }

        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    create(req, res) {
        try {
            const newJob = req.body;
            jobModel.create(newJob);
            res.status(201).send("Vaga de emprego criada com sucesso!");
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    update(req, res) {
        try {
            const { id } = req.params;
            const updateJob = req.body;
            let arrayJobAtualizado = jobModel.update(updateJob, id);

            if (arrayJobAtualizado) {
                res.status(200).send("Vaga de emprego atualizada com sucesso!");
            } else {
                res.status(404).send("Vaga de emprego não encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    delete(req, res) {
        try {
            const { id } = req.params;
            let arrayJobExcluido = jobModel.delete(id);
            if (arrayJobExcluido) {
                res.status(200).send("Vaga de emprego deletada com sucesso!");
            } else {
                res.status(404).send("Vaga de emprego não encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}

module.exports = new JobController();