const Area = require('../../../models').Area;



const getArea = async () => {
     const area = await Area.findAll();
     return area;
}


module.exports = getArea;