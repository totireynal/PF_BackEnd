const cleanAreas = require('../../../utils/cleanAreas');
const Area = require('../../../models').Area;

const getArea = async (CompanyId) => {
     const area = await Area.findAll({
          where: {
               CompanyId: CompanyId
          }
     });
     if (area.length === 0) throw new Error (`The company doesn't have this area.`)
     const areaClean = cleanAreas(area)
     return areaClean;
}


module.exports = getArea;