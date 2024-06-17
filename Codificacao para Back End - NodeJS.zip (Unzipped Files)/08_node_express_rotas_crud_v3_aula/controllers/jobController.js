const jobModel = require("../models/jobModel.js");

class JobController {

    readList(req, res) {
        try {
            let arrayTodosJobs = jobModel.readList();
    
            if(arrayTodosJobs) {
                res.status(200).json(arrayTodosJobs);
            } else {
                res.status(404).send("Nenhuma vaga de emprego foi encontrada!");
            }
        } catch(error) {
            res.status(400).json(error.message);
        }
    }

    read(req, res) {
        try {
            const { id } = req.params;
            let arrayJobEspecifico = jobModel.read(id);
    
            if(arrayJobEspecifico) {
                res.status(200).json(arrayJobEspecifico);
            } else {
                res.status(404).send("Vaga de emprego não foi encontrada!");
            }
        } catch(error) {
            res.status(400).json(error.message);
        }
    }

    create(req, res) {
        try {
            const newJob = req.body;
            jobModel.create(newJob);
            res.status(200).send("Vaga de emprego criada com sucesso!");
        } catch(error) {
            res.status(400).json(error.message);
        }
    }

    update(req, res) {
        try {
            const { id } = req.params;
            const updatedJob = req.body;
            let ArrayJobAtualizado = jobModel.update(updatedJob, id);
            if(ArrayJobAtualizado) {
                res.status(200).send("Vaga de emprego atualizada com sucesso!");
            } else {
                res.status(404).send("Vaga de emprego não foi encontrada!");
            }
        } catch(error) {
            res.status(400).json(error.message);
        }
    }

    delete(req, res) {
        try {
            const { id } = req.params;
            let ArrayJobExcluido = jobModel.delete(id);
            if(ArrayJobExcluido) {
                res.status(200).send("Vaga de emprego excluída com sucesso!");
            } else {
                res.status(404).send("Vaga de emprego não foi encontrada!");
            }
        } catch(error) {
            res.status(400).json(error.message);
        }
    }
}

module.exports = new JobController();