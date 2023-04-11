const { Router } = require('express');

const { getSalesByUserController } = require('../controllers/OrdersController');

const OrdersRouter = Router();

OrdersRouter.post('/', (req, res) => getSalesByUserController(req, res));

module.exports = OrdersRouter;