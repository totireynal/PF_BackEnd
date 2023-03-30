
const { Op } = require('sequelize');
const File = require('../../../models').File;
const Area = require('../../../models').Area;

const getRetentionIndexByArea = async () => {


    const startOfPeriod = new Date(new Date().getFullYear(), 0, 1); // primer día del año actual
    const endOfPeriod = new Date(); // fecha actual
  
    const employeesAtStart = await File.count({
      where: {
        dateOfAdmission: {
          [Op.lte]: startOfPeriod, // fecha de admisión anterior o igual al comienzo del periodo
        },
      },
    });
  
    const employeesAtEnd = await File.count({
      where: {
        dateOfAdmission: {
          [Op.lte]: endOfPeriod, // fecha de admisión anterior o igual al final del periodo
        },
      },
    });
  
    const joinedDuringPeriod = await File.count({
      where: {
        dateOfAdmission: {
          [Op.between]: [startOfPeriod, endOfPeriod], // fecha de admisión dentro del periodo
        },
      },
    });
  
    const retentionIndex =
      ((employeesAtEnd - joinedDuringPeriod) / employeesAtStart) * 100;
  
    const areas = await Area.findAll();
  
    const retentionIndexByArea = await Promise.all(
      areas.map(async (area) => {
        const employeesInArea = await File.count({
          where: {
            AreaId: area.id,
          },
        });
  
        const retentionIndexInArea =
          ((employeesAtEnd - joinedDuringPeriod - employeesInArea) /
            (employeesAtStart - employeesInArea)) *
          100;
  
        return {
          area: area.area,
          retentionIndex: retentionIndexInArea.toFixed(1),
        };
      })
    );
  
    return retentionIndexByArea;
  };


  module.exports = getRetentionIndexByArea;