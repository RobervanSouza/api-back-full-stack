const restauranteService = require('../service/restaurante.service');
// const mongoose = require('mongoose');

const restauranteController = async (req, res) => {
    const todosRestaurantes = await restauranteService.todosRestauranteService();
    if(todosRestaurantes.length === 0)  {
        return res
            .status(404)
            .send({ message: " Não tem restaurante cadasttrado"});
    }
    res.send({ message: "Lista com todos os restaurantes", todosRestaurantes});
};

const criarRestauranteController = async (req, res) => {
    const restaurante = req.body;

    const novoRestaurante = await restauranteService.criarRestauranteService(restaurante);
    res.status(201)
        .send({ message: "Restaurante cadastrado com sucesso", novoRestaurante});
};


module.exports = {
    restauranteController,
    criarRestauranteController,
};