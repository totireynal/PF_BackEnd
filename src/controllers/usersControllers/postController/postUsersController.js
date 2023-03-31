const Users = require("../../../models").Users;
const File = require("../../../models").File;

const postUsersController = async (
  name,
  lastName,
  email,
  birthDate,
  address,
  CompanyId,
  image,
  dni,
  tel,
  role,
  PositionId,
  AreaId,
  dateOfAdmission,
  cuil,
  cbu
) => {
  if ((email, dni, tel)) {
    const results = await Users.findAll({
      where: {
        email: email,
        dni: dni,
        tel: tel,
      },
    });
    if (results) throw new Error `The parameters already exist, please try other ones`;
}

    let newUser = await Users.create({
      name,
      lastName,
      email,
      birthDate,
      address,
      image,
      dni,
      tel,
      role,
      CompanyId,
    });
    const idNewUser = newUser.id;

    await File.create({
      dateOfAdmission,
      cuil,
      cbu,
      PositionId,
      AreaId,
      UserId: idNewUser,
    });

    return `The employee ${name} ${lastName} with id: ${idNewUser} has been created correctly.`;
};

module.exports = postUsersController;
