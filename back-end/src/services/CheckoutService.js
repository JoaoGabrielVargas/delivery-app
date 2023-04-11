const { User, Sale, SaleProduct } = require('../database/models');
// const SaleProduct = require('../database/models/SaleProductModel');

const getSellers = async () => {
  const result = await User.findAll({ where: { role: 'seller' } });
  return result;
};

const createSaleProduct = async (mappingCartItems) => {
  await SaleProduct.bulkCreate(mappingCartItems);
};

const newSale = async ({
  id, sellerId, cartTotalValue, deliveryAddress, deliveryNumber, today, status, cartItems }) => {
  const userId = id;
  const totalPrice = cartTotalValue;
  const saleDate = today;
  const sale = await Sale.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
  });
  const mappingCartItems = cartItems.map((produto) => ({
    saleId: sale.id,
    productId: produto.id,
    quantity: produto.quantity,
  }));
  await createSaleProduct(mappingCartItems);
  return sale;
};

module.exports = {
  getSellers,
  newSale,
};
