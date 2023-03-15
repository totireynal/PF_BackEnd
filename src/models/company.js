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
      // define association here
    }
  }
  Company.init({
    name: DataTypes.STRING,
    cuit: DataTypes.STRING,
    item: DataTypes.STRING,
    location: DataTypes.STRING,
    employees: DataTypes.STRING,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    authorized: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};