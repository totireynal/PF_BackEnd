const Company = require("../../../models").Company;

const getCompanyNameController = async (name) => {
  const results = await Company.findOne({
    where: {
      name: name,
    },
  });
  if (results) {
    return {
      message: "This name already exists",
    };
  } else {
    return null;
  }
};

module.exports = getCompanyNameController;