module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
'Product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'products',
      underscored: true,
    },
  );

  Product.associate = ({ SaleProduct }) => {
    Product.hasMany(SaleProduct, { foreignKey: 'productId', as: 'productId' });
  }

  return Product;
};