module.exports = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProduct',
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      productId: {
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

  SaleProductTable.associate = ({ Product, Sale }) => {
    Sale.belongsToMany(
      Product,
      { as: 'Product', through: SaleProductTable, foreignKey: 'productId', otherKey: 'saleId' },
    );
    Product.belongsToMany(
      Sale,
      { as: 'Sale', through: SaleProductTable, foreignKey: 'saleId', otherKey: 'productId' },
    );

  };

  return SaleProductTable;
};