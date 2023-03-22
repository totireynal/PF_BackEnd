const getUsersController = require('../../usersControllers/getControllers/getUsersController');

const File = require('../../../models').File;


const getAreasController = async (name, role, area, position, sort) => {

    const filter = await getUsersController(name, role, area, position, sort)


    let areas = filter.map(elem => elem.area);

    return [...new Set(areas)];


}

module.exports = getAreasController;