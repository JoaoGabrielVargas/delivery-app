module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct',
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'sales_products',
      underscored: true,
    },
  );

  SaleProduct.associate = ({ Product, Sale }) => {
    Sale.belongsToMany(
      Product,
      { as: 'Product', through: SaleProduct, foreignKey: 'product_id', otherKey: 'sale_id' },
    );
    Product.belongsToMany(
      Sale,
      { as: 'Sale', through: SaleProduct, foreignKey: 'sale_id', otherKey: 'product_id' },
    );
  };

  return SaleProduct;
};