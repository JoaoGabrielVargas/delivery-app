const { Router } = require('express');

const productsController = require('../controllers/ProductsController');

const ProductsRouter = Router();

ProductsRouter.get('/', (req, res) => productsController(req, res));

module.exports = ProductsRouter;