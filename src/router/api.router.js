const express = require('express');
const router = express.Router();
const controller = require('../controllers/api.controller');


router.get('/:modelName', controller.getAll);


router.get('/:modelName/:id', controller.getById);


router.post('/:modelName',  controller.create);

router.put('/:modelName/:id', controller.update);


router.delete('/:modelName/:id', controller.deleteById);

module.exports = router;
