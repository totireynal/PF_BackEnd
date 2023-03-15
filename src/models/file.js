"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  File.init(
    {
      dateOfAdmission: DataTypes.STRING,
      position: DataTypes.STRING,
      area: DataTypes.STRING,
      cuil: DataTypes.STRING,
      cbu: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "File",
    }
  );
  return File;
};
