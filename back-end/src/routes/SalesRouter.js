const { Router } = require('express');

const { getSaleDetails } = require('../controllers/OrdersController');

const SalesRouter = Router();

SalesRouter.get('/details/:id', (req, res) => getSaleDetails(req, res));

module.exports = SalesRouter;  