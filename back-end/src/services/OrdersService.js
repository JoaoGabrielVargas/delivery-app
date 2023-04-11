const { Sale } = require('../database/models');

const getSalesByUser = async ({ userId }) => {
  const result = await Sale.findAll({ where: { userId } });
  return result;
};

module.exports = {
  getSalesByUser,
};
