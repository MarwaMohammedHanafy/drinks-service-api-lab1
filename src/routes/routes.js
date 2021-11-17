const express = require('express');
const coffeeController = require('../controllers/coffee_controller');
const router = new express.Router();
router.get('/coffee', coffeeController.getCoffee);
const teaController = require('../controllers/tea_controller');
router.get('/tea', teaController.gettea);
module.exports = router;