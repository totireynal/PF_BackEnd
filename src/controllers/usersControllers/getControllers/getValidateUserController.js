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
        message: 'The email already exists in system.',
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
        message: 'The dni already exists in system.',
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
        message: 'The phone already exists in system.',
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
        message: 'The cbu already exists in system.',
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
        message: 'The cuil already exists in system.',
      };
    } else {
      return null;
    }
  }
};

module.exports = getValidateUserController;
