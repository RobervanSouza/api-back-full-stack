const models = require('../models/api.restaurante');

function getModel(modelName) {
    const model = models[ modelName ];
    if (!model) {
        throw new Error(`Model '${modelName}' não encontrado.`);
    }
    return model;
}

function getAll(modelName) {
    const model = getModel(modelName);

    return model.find();
}

function getById(modelName, id) {
    const model = getModel(modelName);
    return model.findById(id);
}

function create(modelName, data) {
    const model = getModel(modelName);
    return model.create(data);
}

function update(modelName, id, data) {
    const model = getModel(modelName);
    return model.findByIdAndUpdate(id, data, { new: true });
}

function deleteById(modelName, id) {
    const model = getModel(modelName);
    return model.findByIdAndDelete(id);
}



module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
};
