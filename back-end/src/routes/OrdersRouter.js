const { Router } = require('express');

const { getSalesByUserController, 
    getSalesBySellerController } = require('../controllers/OrdersController');

const OrdersRouter = Router();

OrdersRouter.post('/', (req, res) => getSalesByUserController(req, res));
OrdersRouter.post('/seller', (req, res) => getSalesBySellerController(req, res));

module.exports = OrdersRouter;