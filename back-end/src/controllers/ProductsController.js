const getAll = require('../services/ProductsService');

const getAllProducts = async (req, res) => {
console.log(getAll);
  const result = await getAll();
  console.log(result);
  return res.status(200).json(result); 
};

module.exports = getAllProducts;