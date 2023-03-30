const { validateLogin } = require('../services/LoginService');

const loginValidation = async (req, res) => {
  const { body } = req;
  const { statusCode, message } = await validateLogin(body);
  return res.status(statusCode).json(message);
};

module.exports = loginValidation;
