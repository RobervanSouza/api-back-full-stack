const router = require("express").Router();

const restauranteController = require ('../controllers/restaurante.controller');

const {  validObjectBody } = require('../middlewares/restaurante.middlewares');

router.get("/restaurante", restauranteController.restauranteController);

router.post("/criar-restaurante", validObjectBody, restauranteController.criarRestauranteController);


module.exports = router;