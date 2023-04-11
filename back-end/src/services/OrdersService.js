const { Sale, Product, SaleProduct, User } = require('../database/models');

const getSalesByUser = async ({ userId }) => {
  const result = await Sale.findAll({ where: { userId } });
  return result;
};

const getSalesBySeller = async ({ sellerId }) => {
  const result = await Sale.findAll({ where: { sellerId } });
  return result;
};

const getSalesDetails = async ({ id }) => {
  const sale = await Sale.findOne({ where: { id } });
  const products = await Product.findAll({});
  const seller = (await User.findOne({ where: { id: sale.sellerId } })).name;
  const salesProducts = await SaleProduct.findAll({ where: { id } });
  console.log(sale, products, seller, salesProducts);
};

module.exports = {
  getSalesByUser,
  getSalesBySeller,
  getSalesDetails,
};
