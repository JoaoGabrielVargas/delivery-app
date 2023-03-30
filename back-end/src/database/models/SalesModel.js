module.exports = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define('Sale',
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

  SaleTable.associate = ({ User }) => {
    User.hasMany(SaleTable, { as: 'buyer', foreignKey: 'userId' });
    User.hasMany(SaleTable, { as: 'seller', foreignKey: 'sellerId' });
  };

  return SaleTable;
};