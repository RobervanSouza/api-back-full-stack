
const {
    restaurante,
    hotel,
    carro,
    moto,
    filmes,
    livro,
    turismo,
    cachorro,
    gato,
    celular
} = require('../models/models.restaurante');
const models = [
    restaurante,
    hotel,
    carro,
    moto,
    filmes,
    livro,
    turismo,
    cachorro,
    gato,
    celular
];

function validarCampos(req, res, next) {
    try {
        // Percorra todas as models
        models.forEach((model) => {
            // Verifique os campos obrigatórios de cada model
            const camposObrigatorios = Object.keys(model.schema.obj);
            console.log(camposObrigatorios);
            camposObrigatorios.forEach((campo) => {
                if (!req.body[ campo ]) {
                    throw new Error(`Campo '${campo}' está faltando no modelo '${model.modelName}'.`);
                }
            });
        });

        // Se todos os campos obrigatórios estiverem presentes, passe para o próximo middleware
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports= validarCampos;