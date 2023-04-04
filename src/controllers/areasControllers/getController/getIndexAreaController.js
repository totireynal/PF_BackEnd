
const { Op } = require('sequelize');
const Users = require('../../../models').Users;
const Area = require('../../../models').Area;
const File = require('../../../models').File;
const Company = require('../../../models').Company;
const { sequelize } = require("../../../models");





const getRetentionIndexByArea = async (companyId) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const firstDayOfYear = new Date(year, 0, 1);
}


//La cantidad de empleados eliminados en el año actual está en getCountDeletedController






//BUSQUEDA DE INGRESANTES EN EL AÑO ACTUAL

// const getRetentionIndexByArea = async (companyId) => {
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const firstDayOfYear = new Date(year, 0, 1);

//   const result = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.gte]: firstDayOfYear,
//         [Op.lte]: currentDate,
//       },
//     },
//     include: {
//       model: Users,
//       where: {
//         CompanyId: companyId,
//       },
//     },
//   });
//   return result;
// };





//CANTIDAD DE EMPLEADOS COMPANY X
// async function getRetentionIndexByArea(companyId) {
//   const conteo = await File.count({
//     where: {
//       deletedAt: null,
//     },
//     include: [{
//       model: Users,
//       where: {
//         CompanyId: companyId,
//       },
//     }],
//     distinct: true,
//     col: 'UserId',
//     raw: true,
//   });

//   return conteo;
// }

module.exports = getRetentionIndexByArea;








