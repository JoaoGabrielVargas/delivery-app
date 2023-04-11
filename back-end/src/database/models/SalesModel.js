module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'sales',
      underscored: true,
    },
  );

  Sale.associate = ({ User, SaleProduct }) => {
    Sale.hasMany(SaleProduct, { as: 'sale', foreignKey: 'saleId' });
    Sale.belongsTo(User, { as: 'buyer', foreignKey: 'userId' });
    Sale.belongsTo(User, { as: 'seller', foreignKey: 'sellerId' });
  };

  return Sale;
};