const mongoose = require('mongoose');

const validId = (req, res, next) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res
            .status(400)
            .send({
                message: 'ID invalido, verifique o ID de seu re no GET_ALL',
            });
    }

    next();
};

const validObjectBody = (req, res, next) => {
    const restaurante = req.body;
    if (
        !restaurante ||
        !restaurante.nome ||
        !restaurante.pais||
        !restaurante.cidade ||
        !restaurante.imageUrl
    ) {
        return res
            .status(400)
            .send({
                message: 'envio incompleto, complete todos os campos do restaurante.',
            });
    }
    next();
};

module.exports = {
    validObjectBody,
    validId,
};
