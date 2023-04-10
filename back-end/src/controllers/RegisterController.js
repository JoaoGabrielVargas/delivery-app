const { addNewUser } = require('../services/RegisterService');

const addUser = async (req, res) => {
  const { body } = req;
  const { statusCode, user } = await addNewUser(body);
  if (user.message === 'Conflict') {
    return res.status(statusCode).json({ message: user.message, user, token: null });
  }
  return res.status(statusCode).json({ token: user.message, user }); 
};

module.exports = addUser;
