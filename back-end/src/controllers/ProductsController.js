const getAll = require('../services/ProductsService');

const getAllProducts = async (req, res) => {
  const result = await getAll();
  return res.status(200).json(result); 
};

module.exports = getAllProducts;