const Company = require("../../../models").Company;

const getCompanyController = async (name, cuit, tel, email) => {
  if (name) {
    const results = await Company.findOne({
      where: { name: name },
    });
    console.log(results, 'name');
    if (results) {
      return {
        message: "This name already exists",
      };
    } else {
      return null;
    }
  }
  if (cuit) {
    const results = await Company.findOne({
      where: { cuit: cuit },
    });
    console.log(results, 'cuit');
    if (results) {
      return {
        message: "This cuit already exists",
      };
    } else {
      return null;
    }
  }
  if (tel) {
    const results = await Company.findOne({
      where: { tel: tel },
    });
    console.log(results, 'tel');
    if (results) {
      return {
        message: "This phone already exists",
      };
    } else {
      return null;
    }
  }
  if (email) {
    const results = await Company.findOne({
      where: { email: email },
    });
    console.log(results, 'email');
    if (results) {
      return {
        message: "This email already exists",
      };
    } else {
      return null;
    }
  }
};

module.exports = getCompanyController;
