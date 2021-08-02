const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    departamento: String
})

const Funcionario = mongoose.model("funcionarios", FuncionarioSchema);

module.exports = () => {

    this.readAll = (callback) => {
        Funcionario.find({}, (err, funcionarios) => {
            if (err) {
                throw err;
            } else {
                callback(funcionarios);
            }
        })
    }

    this.readOnlyOne = (id, callback) => {
        Funcionario.findById(id, (err, funcionarios) => {
            if (err) {
                throw err;
            } else {
                callback(funcionarios);
            }
        })
    }

    this.create = (newFuncionario, callback) => {
        Funcionario.create({
            nome: newFuncionario.nome,
            idade: newFuncionario.idade,
            departamento: newFuncionario.departamento
        }, (err, createdFuncionario) => {
            if (err) {
                throw err;
            } else {
                callback(createdFuncionario);
            }
        })
    }

    this.update = (id, funcionario, callback) => {
        Funcionario.findByIdAndUpdate(id, funcionario, { new: true, useFindAnModify: true }, (err, updatedFuncionario) => {
            if (err) {
                throw err;
            } else {
                callback(updatedFuncionario);
            }
        })
    }

    this.delete = (id) => {
        Funcionarios.findByIdAndRemove(id, { useFindAndModify: true }, (err, removedFuncionario) => {
            if (err) {
                throw err
            }
            callback(removedFuncionario)
        })
    }

    return this;
}