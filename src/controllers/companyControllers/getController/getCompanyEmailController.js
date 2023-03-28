const Company = require("../../../models").Company;

const getCompanyEmailController = async (email) => {
  const results = await Company.findOne({
    where: {
      email: email,
    },
  });
  if (results) {
    return {
      message: "This email already exists",
    };
  } else {
    return null;
  }
};

module.exports = getCompanyEmailController;
