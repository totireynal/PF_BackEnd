'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsTo(models.Company);
      models.Company.hasMany(Users);
      Users.hasOne(models.UserPassword);
      models.UserPassword.belongsTo(Users);
      
    }
  }
  Users.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    image: DataTypes.BLOB,
    dni: DataTypes.STRING,
    tel: DataTypes.STRING,
    role: DataTypes.ENUM('SuperAdmin', 'Admin', 'User'),
  }, {
    sequelize,
    modelName: 'Users',
    paranoid: true,
    deletedAt: 'softDelete'
  });
  return Users;
};