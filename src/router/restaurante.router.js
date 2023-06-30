const router = require("express").Router();

const restauranteController = require ('../controllers/restaurante.controller');

const { validId, validObjectBody } = require('../middlewares/restaurante.middlewares');

router.get("/restaurante", restauranteController.restauranteController);

router.post("/criar-restaurante", validObjectBody, restauranteController.criarRestauranteController);


router.get(
    '/restaurante/:id',
    validId,
    restauranteController.idController,
);

router.put(
    '/editar/:id',
    validId,
    validObjectBody,
    restauranteController.Editarcontroller,
);
router.delete(
    '/delete/:id',
    validId,
    restauranteController.deleteRestaurantecontroller,
);


module.exports = router;