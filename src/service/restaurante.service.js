const { restaurante } = require("../models/models.restaurante");


const todosRestauranteService = async () => {
    const restaurantes = await restaurante.find();
    return restaurantes;
};

const criarRestauranteService = async (novoRestaurante) => {
    const restaurantes = await restaurante.create(novoRestaurante);
    return restaurantes;
};
const idRestauranteService = async (idParam) => {
    const restaurante = await restaurante.findById(idParam);
    return restaurante;
};

const editarRestauranteService = async (idParam, editaRestaurante) => {
    const editaRestaurantes = await restaurante.findByIdAndUpdate(
        idParam,
        editaRestaurante,
    ).setOptions({ returnOriginal: false });
    return editaRestaurantes;
};

// delete convite
const deleteRestauranteService = async (idParam) => {
    return await restaurante.findByIdAndDelete(idParam);
};

module.exports = {
    todosRestauranteService,
    criarRestauranteService,
    editarRestauranteService,
    deleteRestauranteService,
    idRestauranteService
};