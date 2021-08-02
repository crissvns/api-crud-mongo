const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

module.exports = (application) => {
    router.get("/", (req, res) => {
        try {
            let model = application.app.models.funcionariosModel;
            model.readAll((funcionarios) => {
                res.send(funcionarios);
            });
        } catch (error) {
            res.statusCode = 505;
            res.send(error);
        }
    })

    router.get("/:id", (req, res) => {
        try {
            let model = application.app.models.funcionariosModel;
            model.readOnlyOne(req.params.id, (funcionarios) => {
                res.send(funcionarios);
            });
        } catch (error) {
            res.statusCode = 505;
            res.send(error);
        }
    })

    router.post("/", (req, res) => {
        try {
            let model = application.app.models.funcionariosModel;
            let funcionario = req.body;
            model.create(funcionario, (createdFuncionario) => {
                res.send({
                    mensagem: "Funcionário cadastrado com sucesso.",
                    createdFuncionario: createdFuncionario
                });
            });
        } catch (error) {
            res.statusCode = 505;
            res.send(error);
        }
    })

    router.put("/:id", (req, res) => {
        try {
            let model = application.app.models.funcionariosModel;
            model.update(req.params.id, req.body, (updatedFuncionario) => {
                res.send({
                    mensagem: "Funcionário alterado com sucesso.",
                    updatedFuncionario: updatedFuncionario
                });
            });
        } catch (error) {
            res.statusCode = 505;
            res.send(error);
        }
    })

    router.delete("/:id", (req, res) => {
        try {
            let model = application.app.models.funcionarioModel
            model.delete(req.params.id, (removedFuncionario) => {
                res.send({
                    message: "Funcionário removido com sucesso",
                    removedFuncionario: removedFuncionario
                })
            })
        } catch (e) {
            res.statusCode = 505
            res.send(e)
        }
    })

    application.use('/funcionarios', router);
}