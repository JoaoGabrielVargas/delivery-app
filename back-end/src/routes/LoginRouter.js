const { Router } = require('express');

const loginController = require('../controllers/LoginController');

const LoginRouter = Router();

LoginRouter.post('/', (req, res) => loginController(req, res));

module.exports = LoginRouter;