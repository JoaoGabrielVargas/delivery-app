const { addNewUser } = require('../services/RegisterService');

const addUser = async (req, res) => {
  const { body } = req;
  const { statusCode, message } = await addNewUser(body);
  return res.status(statusCode).json(message);
};

module.exports = addUser;
