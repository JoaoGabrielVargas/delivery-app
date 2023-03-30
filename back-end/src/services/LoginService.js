const { User } = require('../database/models');
const verifyPassword = require('../utils/hashVerification');

const validateLogin = async (body) => {
  const { email, password } = body;
  const result = await User.findOne({ where: { email } });
  if (!result) return { statusCode: 404, message: 'Not found' };

  const hashPassword = result.password;
  const verificationPassword = await verifyPassword(password, hashPassword);
  if (verificationPassword) return { statusCode: 200, message: 'customer' }; 
  return { statusCode: 401, message: 'Invalid data' };
};

module.exports = {
  validateLogin,
};
