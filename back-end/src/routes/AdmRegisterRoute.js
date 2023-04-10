const { Router } = require('express');

const registerController = require('../controllers/RegisterController');

const AdmRegisterRouter = Router();

AdmRegisterRouter.post('/', (req, res) => registerController(req, res));

module.exports = AdmRegisterRouter;