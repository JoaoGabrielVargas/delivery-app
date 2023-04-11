module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct',
    {
      saleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'sales_products',
      underscored: true,
    },
  );

  SaleProduct.associate = ({ Sale, Product }) => {
    SaleProduct.belongsTo(Sale, { foreignKey: 'saleId' });
    SaleProduct.belongsTo(Product, { foreignKey: 'productId' });
  };

  return SaleProduct;
};