const express = require('express');
const router = express.Router();
const jogadorController = require('../controllers/jogadoresControllers.js');

router.post('/', jogadorController.CreateController);
router.get('/id', jogadorController.getByIdController);
router.get('/all', jogadorController.getAllController);
router.delete('/delete', jogadorController.deleteController);

module.exports = router;