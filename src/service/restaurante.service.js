const { restaurante } = require("../models/models.restaurante");


const todosRestauranteService = async () => {
    const restaurantes = await restaurante.find();
    return restaurantes;
};

const criarRestauranteService = async (novoRestaurante) => {
    const restaurantes = await restaurante.create(novoRestaurante);
    return restaurantes;
};


module.exports = {
    todosRestauranteService,
    criarRestauranteService,
};