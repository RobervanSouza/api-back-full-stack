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

const idController = async (req, res) => {
    const idParam = req.params.id;

    const restaurante = await restauranteService.idRestauranteService(idParam);
    if (restaurante === undefined) {
        res
            .status(404)
            .send({ message: ' Nenhum restaurante encontrado, verifique o id!!!' });
    } else {
        res.send({
            message: ' Restaurante encontrado com sucesso!!!',
            escolhaRestaurante: restaurante,
        });
    }
};

const Editarcontroller = async (req, res) => {
    const parametroId = req.params.id;
    const editeRestaurante = req.body;
    const editRestaurante = await restauranteService.editarRestauranteService(
        parametroId,
        editeRestaurante,
    );
    res.send({ menssage: 'Restaurante editado com sucesso!!!', editRestaurante });
};

// deletar convite
const deleteRestaurantecontroller = async (req, res) => {
    const idparam = req.params.id;
    const teste = await restauranteService.deleteRestauranteService(idparam);
    if (!teste) {
        return res.status(404).send({ message: 'id not found' });
    }
    res.send({ message: 'restaurante  deletado com sucesso!!!' });
};

module.exports = {
    restauranteController,
    criarRestauranteController,
    deleteRestaurantecontroller,
    Editarcontroller,
    idController,
};