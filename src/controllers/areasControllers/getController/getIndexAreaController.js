
const { Op } = require('sequelize');
const Users = require('../../../models').Users;
const Area = require('../../../models').Area;
const File = require('../../../models').File;
const Company = require('../../../models').Company;




const getRetentionIndexByArea = async (companyId) => {
  const startOfPeriod = new Date(new Date().getFullYear(), 0, 1); // primer día del año actual
  const endOfPeriod = new Date(); // fecha actual

  const employeesAtStart = await File.count({
    where: {
      dateOfAdmission: {
        [Op.lte]: startOfPeriod, // fecha de admisión anterior o igual al comienzo del periodo
      },
      '$User.CompanyId$': companyId,
    },
    include: [{
      model: Users,
      required: true,
    }],
  });

  const employeesAtEnd = await File.count({
    where: {
      dateOfAdmission: {
        [Op.lte]: endOfPeriod, // fecha de admisión anterior o igual al final del periodo
      },
      '$User.CompanyId$': companyId,
    },
    include: [{
      model: Users,
      required: true,
    }],
  });

  const joinedDuringPeriod = await File.count({
    where: {
      dateOfAdmission: {
        [Op.between]: [startOfPeriod, endOfPeriod], // fecha de admisión dentro del periodo
      },
      '$User.CompanyId$': companyId,
    },
    include: [{
      model: Users,
      required: true,
    }],
  });

  const retentionIndex =
    ((employeesAtEnd - joinedDuringPeriod) / employeesAtStart) * 100;

  const areas = await Area.findAll({
    where: {
      CompanyId: companyId,
    },
  });

  const retentionIndexByArea = await Promise.all(
    areas.map(async (area) => {
      const employeesInArea = await File.count({
        where: {
          AreaId: area.id,
          '$User.CompanyId$': companyId,
        },
        include: [{
          model: Users,
          required: true,
        }],
      });

      const retentionIndexInArea =
        (employeesInArea === 0) ? 0 : Number((((employeesAtEnd - joinedDuringPeriod - employeesInArea) / (employeesAtStart - employeesInArea)) * 100).toFixed(1));

      return {
        area: area.area,
        retentionIndex: retentionIndexInArea,
      };
    })
  );

  return retentionIndexByArea;
};











// const getRetentionIndexByArea = async () => {


//   const startOfPeriod = new Date(new Date().getFullYear(), 0, 1); // primer día del año actual
//   const endOfPeriod = new Date(); // fecha actual

//   const employeesAtStart = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.lte]: startOfPeriod, // fecha de admisión anterior o igual al comienzo del periodo
//       },
//     },
//   });

//   const employeesAtEnd = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.lte]: endOfPeriod, // fecha de admisión anterior o igual al final del periodo
//       },
//     },
//   });

//   const joinedDuringPeriod = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.between]: [startOfPeriod, endOfPeriod], // fecha de admisión dentro del periodo
//       },
//     },
//   });

//   const retentionIndex =
//     ((employeesAtEnd - joinedDuringPeriod) / employeesAtStart) * 100;

//   const areas = await Area.findAll();

//   const retentionIndexByArea = await Promise.all(
//     areas.map(async (area) => {
//       const employeesInArea = await File.count({
//         where: {
//           AreaId: area.id,
//         },
//       });

//       const retentionIndexInArea =
//         ((employeesAtEnd - joinedDuringPeriod - employeesInArea) /
//           (employeesAtStart - employeesInArea)) *
//         100;

//       return {
//         area: area.area,
//         retentionIndex: retentionIndexInArea.toFixed(1),
//       };
//     })
//   );

//   return retentionIndexByArea;
// };
















// const getRetentionIndexByArea = async (companyId) => {

//   const startOfPeriod = new Date(new Date().getFullYear(), 0, 1); // primer día del año actual
//   const endOfPeriod = new Date(); // fecha actual

//   const employeesAtStart = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.lte]: startOfPeriod, // fecha de admisión anterior o igual al comienzo del periodo
//       },
//       '$User.CompanyId$': companyId // solo empleados de la compañía especificada
//     },
//     include: [{
//       model: User,
//       attributes: [],
//       where: {
//         CompanyId: companyId // solo empleados de la compañía especificada
//       }
//     }]
//   });

//   const employeesAtEnd = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.lte]: endOfPeriod, // fecha de admisión anterior o igual al final del periodo
//       },
//       '$User.CompanyId$': companyId // solo empleados de la compañía especificada
//     },
//     include: [{
//       model: User,
//       attributes: [],
//       where: {
//         CompanyId: companyId // solo empleados de la compañía especificada
//       }
//     }]
//   });

//   const joinedDuringPeriod = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.between]: [startOfPeriod, endOfPeriod], // fecha de admisión dentro del periodo
//       },
//       '$User.CompanyId$': companyId // solo empleados de la compañía especificada
//     },
//     include: [{
//       model: User,
//       attributes: [],
//       where: {
//         CompanyId: companyId // solo empleados de la compañía especificada
//       }
//     }]
//   });

//   const retentionIndex =
//     ((employeesAtEnd - joinedDuringPeriod) / employeesAtStart) * 100;

//   const areas = await Area.findAll();

//   const retentionIndexByArea = await Promise.all(
//     areas.map(async (area) => {
//       const employeesInArea = await File.count({
//         where: {
//           AreaId: area.id,
//           '$User.CompanyId$': companyId // solo empleados de la compañía especificada
//         },
//         include: [{
//           model: User,
//           attributes: [],
//           where: {
//             CompanyId: companyId // solo empleados de la compañía especificada
//           }
//         }]
//       });

//       const retentionIndexInArea =
//         ((employeesAtEnd - joinedDuringPeriod - employeesInArea) /
//           (employeesAtStart - employeesInArea)) *
//         100;

//       return {
//         area: area.area,
//         retentionIndex: retentionIndexInArea.toFixed(1),
//       };
//     })
//   );

//   return retentionIndexByArea;
// };




  module.exports = getRetentionIndexByArea;



