const { sequelize } = require("../../../models");
const Users = require("../../../models").Users;
// const { Op } = require('sequelize');
const { Op } = require('sequelize');

const getBirthdayController = async () => {
  const today = new Date();
  const nextTenDays = [];
  for (let i = 0; i <= 9; i++) {
    const nextDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    const nextDay = nextDate.getDate();
    const nextMonth = nextDate.getMonth() + 1;
    nextTenDays.push(`${nextMonth}-${nextDay}`);
  }
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const todayBirthday = `${todayMonth}-${todayDay}`;

  const users = await Users.findAll({
    attributes: ["name", "lastName", "birthDate"],
    where: {
      [Op.and]: [
        { birthDate: { [Op.not]: null } },
        {
          [Op.or]: [
            ...nextTenDays.map((date) => {
              return {
                birthDate: {
                  [Op.and]: [
                    sequelize.where(
                      sequelize.fn("date_part", "month", sequelize.col("birthDate")),
                      "=",
                      date.split("-")[0]
                    ),
                    sequelize.where(
                      sequelize.fn("date_part", "day", sequelize.col("birthDate")),
                      "=",
                      date.split("-")[1]
                    ),
                  ],
                },
              };
            }),
            {
              birthDate: {
                [Op.and]: [
                  sequelize.where(
                    sequelize.fn("date_part", "month", sequelize.col("birthDate")),
                    "=",
                    todayMonth
                  ),
                  sequelize.where(
                    sequelize.fn("date_part", "day", sequelize.col("birthDate")),
                    "=",
                    todayDay
                  ),
                ],
              },
            },
          ],
        },
      ],
    },
    order: [
      sequelize.fn("date_part", "month", sequelize.col("birthDate")),
      sequelize.fn("date_part", "day", sequelize.col("birthDate")),
    ],
  });
  return !users.length ? "There are no upcoming birthdays" : users;
};



module.exports = getBirthdayController;