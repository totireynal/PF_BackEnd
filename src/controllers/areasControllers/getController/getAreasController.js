const File = require('../../../models').File;

const getAreasController = async () => {

    const results = await File.findAll();

    let areas = results.map(elem => elem.area);

    return [...new Set(areas)];


}

module.exports = getAreasController;