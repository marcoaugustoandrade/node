const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.get('/', veiculoController.listarTodos);
router.get('/:id', veiculoController.listarUm);
router.post('/', veiculoController.salvar);
router.patch('/', veiculoController.alterar);
router.delete('/', veiculoController.deletar);

module.exports = router;