const { User, Sale } = require('../database/models');

const getSellers = async () => {
  const result = await User.findAll({ where: { role: 'seller' } });
  return result;
};

const newSale = async ({
  id,
  sellerId,
  cartTotalValue,
  deliveryAddress,
  deliveryNumber,
  today, status }) => {
  const userId = id;
  const totalPrice = cartTotalValue;
  const saleDate = today;
  const sale = await Sale.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
  });
  return sale;
};

module.exports = {
  getSellers,
  newSale,
};
