const { getSalesByUser, getSalesBySeller } = require('../services/OrdersService');

const getSalesByUserController = async (req, res) => {
  const salesByUser = await getSalesByUser(req.body);
  return res.status(200).json(salesByUser);
};

const getSalesBySellerController = async (req, res) => {
  const salesBySeller = await getSalesBySeller(req.body);
  return res.status(200).json(salesBySeller);
};

const getSaleDetails = async (req, res) => {
  const { id } = req.params;
  const result = await getSaleDetails(id);
  return res.status(201).json(result);
};

module.exports = { 
  getSalesByUserController, 
  getSalesBySellerController,
  getSaleDetails,
};
