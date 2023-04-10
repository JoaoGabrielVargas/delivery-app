const { Op } = require('sequelize');
const { User } = require('../database/models');
const createHash = require('../utils/createHash');
const { generateToken } = require('../utils/JWT'); 

const userExists = async (name, email) => {
  const result = await User.findOne({ where: { [Op.or]: [{ email }, { name }] } });
  
  return result;
};

const addNewUser = async (body) => {
  const { name, email, password, role } = body;
  /* const token = generateToken({ email, password }); */
  const passwordHash = createHash(password);

  const alreadyExists = await userExists(name, email);
  const token = generateToken({ email, password, name, role }); 

  const user = {
    name,
      email,
      password: passwordHash,
      role,
  };
  if (alreadyExists) return { statusCode: 409, user: { ...user, message: 'Conflict' } };
  try {
   await User.create(user);
  
    return { statusCode: 201, user: { ...user, message: token } };
  } catch (err) {
    return { statusCode: 401, message: err };
  }
};

module.exports = {
  addNewUser,
};
