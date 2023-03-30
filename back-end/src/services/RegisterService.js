const { User } = require('../database/models');
const createHash = require('../utils/createHash');

const addNewUser = async (body) => {
  const { name, email, password, role } = body;

  const passwordHash = createHash(password);

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
