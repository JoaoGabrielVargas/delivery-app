const { getSalesByUser } = require('../services/OrdersService');

const getSalesByUserController = async (req, res) => {
  const salesByUser = await getSalesByUser(req.body);
  return res.status(200).json(salesByUser);
};

module.exports = { 
  getSalesByUserController, 
};
