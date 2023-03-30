module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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

  // UserTable.associate = ({BlogPost}) =>{
  //   UserTable.hasMany(BlogPost, {
  //     as: 'blogPost',
  //     foreignKey: 'userId',
  //   });
  // }
  return UserTable;
};