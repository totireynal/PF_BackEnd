const Users = require("../../../models").Users;
const File = require("../../../models").File;

const getValidateUserController = async (email, dni, tel, cuil, cbu) => {

  if (email) {
    const findByEmail = await Users.findOne({
      where: {
        email: email,
      },
    });
    if (findByEmail) {
      return {
        message: `The email: ${email} already exists in system. Please try another one.`,
      };
    } else {
      return null;
    }
  }

  if (dni) {
    const findByDni = await Users.findOne({
      where: {
        dni: dni,
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
