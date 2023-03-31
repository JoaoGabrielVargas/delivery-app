const { Router } = require('express');

const registerController = require('../controllers/RegisterController');

const RegisterRouter = Router();

RegisterRouter.post('/', (req, res) => registerController(req, res));

module.exports = RegisterRouter;