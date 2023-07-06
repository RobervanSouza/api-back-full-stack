const service = require('../service/api.service');
const mongoose = require("mongoose"); // inporta o mongoose


function getAll(req, res, next) {
    const modelName = req.params.modelName;
    service.getAll(modelName)
        .then(data => {
            if (data.length === 0) {
                res.status(404).send({ message: `Nenhum ${modelName} encontrado` });
            } else {
                res.status(200).send({ message: `Lista de ${modelName} encontrados, total de: ( ${data.length} ) itens`, data });
            }
        })
        .catch(error => {
            next(error);
        });
}

function getById(req, res, next) {
    const modelName = req.params.modelName;
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({ message: `ID inválido: ${id}, falta caracteres` });
        return;
    }

    service.getById(modelName, id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Nenhum ID de ${modelName} encontrado` });
            } else {
                res.status(200).send({ message: `ID de ${modelName} encontrado`, data });
            }
        })
        .catch(error => {
            next(error);
        });
}

function create(req, res, next) {
    const modelName = req.params.modelName;
    const newData = req.body;

    service.create(modelName, newData)
        .then(createdData => {
            res.status(201).json({ message: `${modelName} criado com sucesso`, data: createdData });
        })
        .catch(error => {
            next(error);
        });
}

function update(req, res, next) {
    const modelName = req.params.modelName;
    const id = req.params.id;
    const updatedData = req.body;

    service.update(modelName, id, updatedData)
        .then(updatedData => {
            if (!updatedData) {
                res.status(404).send({ message: `Id ${modelName} não encontrado` });
            } else {
                res.status(201).json({ message: `${modelName} editado com sucesso`, data: updatedData });
            }
        })
        .catch(error => {
            next(error);
        });
}

function deleteById(req, res, next) {
    const modelName = req.params.modelName;
    const id = req.params.id;

    service.deleteById(modelName, id)
        .then(() => {
            res.sendStatus(204);
        })
        .catch(error => {
            next(error);
        });
}



module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
};
