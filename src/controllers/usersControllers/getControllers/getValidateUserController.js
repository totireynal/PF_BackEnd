const Users = require("../../../models").Users;
const File = require("../../../models").File;

const getValidateUserController = async (email, dni, tel, cuil, cbu) => {
  const { CompanyId } = req.body;

  if (email) {
    const findByEmail = await Users.findOne({
      where: {
        email: email,
        CompanyId: CompanyId,
      },
    });
    if (findByEmail) {
      return {
        message: `Cbu: ${cbu} already exists in system. Please try another one.`,
      };
    } else {
      return null;
    }
  }

  if (dni) {
    const findByDni = await Users.findOne({
      where: {
        dni: dni,
        CompanyId: CompanyId,
      },
    });
    if (findByDni) {
      return {
        message: `The dni: ${dni} already exists in system. Please try another one.`,
      };
    } else {
      return null;
    }
  }

  if (tel) {
    const findByTel = await Users.findOne({
      where: {
        tel: tel,
        CompanyId: CompanyId,
      },
    });
    if (findByTel) {
      return {
        message: `The phone: ${tel} already exists in system. Please try another one.`,
      };
    } else {
      return null;
    }
  }

  if (cbu) {
    const findByCbu = await File.findOne({
      where: {
        cbu: cbu,
        CompanyId: CompanyId,
      },
    });
    if (findByCbu) {
      return {
        message: `Cbu: ${cbu} already exists in system. Please try another one.`,
      };
    } else {
      return null;
    }
  }

  if (cuil) {
    const findByCuil = await File.findOne({
      where: {
        cuil: cuil,
        CompanyId: CompanyId,
      },
    });
    if (findByCuil) {
      return {
        message: `Cuil: ${cuil} already exists in system. Please try another one.`,
      };
    } else {
      return null;
    }
  }
};

module.exports = getValidateUserController;
