const jwt = require('jsonwebtoken');
const fs = require('fs');

const secretKey = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' });
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (user) => {
  const result = jwt.sign({ payload: { user } }, secretKey, jwtConfig);
  return result;
};

const tokenDecode = async (token) => {
  if (!token) {
    throw new Error('Undefined Token');
  }
  try {
  const response = jwt.decode(token, secretKey);
  return response;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { generateToken, tokenDecode };
