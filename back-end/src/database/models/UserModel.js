module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    },
  );

  User.associate = ({Sale}) => {
    User.hasMany(Sale, { foreignKey: 'user_id', as: 'user' }),
    User.hasMany(Sale, { foreignKey: 'seller_id', as: 'seller' });
  };

  return User;
};