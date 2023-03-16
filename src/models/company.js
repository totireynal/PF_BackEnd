'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasOne(models.Review),
      Company.hasMany(models.Users),
      Company.belongsTo(models.Information)
    }
  }
  Company.init({
    name: DataTypes.STRING,
    cuit: DataTypes.STRING,
    industry: DataTypes.STRING,
    location: DataTypes.STRING,
    numberEmployees: DataTypes.INTEGER,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    authorized: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};