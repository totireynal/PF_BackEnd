"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserPassword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserPassword.belongsTo(models.Users)
    }
  }
  UserPassword.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserPassword",
    }
  );
  // UserPassword.init({
  //   userName: DataTypes.STRING,
  //   password: DataTypes.STRING,
  // }, {
  //   sequelize,
  //   modelName: 'UserPassword',
  // });
  return UserPassword;
};
