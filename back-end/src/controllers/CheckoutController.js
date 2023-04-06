const { getSellers, newSale } = require('../services/CheckoutService');

const getSellersController = async (req, res) => {
  const sellers = await getSellers();
  return res.status(200).json(sellers);
};

const newSaleController = async (req, res) => {
  const sale = await newSale(req.body);
  return res.status(201).json(sale);
};

module.exports = { 
  getSellersController, 
  newSaleController,
};
