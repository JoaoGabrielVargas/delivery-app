const { Router } = require('express');

const { getSellersController, newSaleController } = require('../controllers/CheckoutController');

const CheckoutRouter = Router();

CheckoutRouter.get('/', (req, res) => getSellersController(req, res));
CheckoutRouter.post('/', (req, res) => newSaleController(req, res));

module.exports = CheckoutRouter;