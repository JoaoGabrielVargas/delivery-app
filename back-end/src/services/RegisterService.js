const { Op } = require('sequelize');
const { User } = require('../database/models');
const createHash = require('../utils/createHash');

const userExists = async (name, email) => {
  const result = await User.findOne({ where: { [Op.or]: [{ email }, { name }] } });
  
  return result;
};

const addNewUser = async (body) => {
  const { name, email, password, role } = body;
  const passwordHash = createHash(password);

  const alreadyExists = await userExists(name, email);

  if (alreadyExists) return { statusCode: 409, message: 'Conflict' };

  try {
    await User.create({
      name,
      email,
      password: passwordHash,
      role,
    });
    // retorna o role para ativar o redirecionamento para a página devida.
    return { statusCode: 201, message: role };
  } catch (err) {
    return { statusCode: 401, message: err };
  }
};

module.exports = {
  addNewUser,
};
