const getUsersController = require('../../usersControllers/getControllers/getUsersController')

const getPositionsController = async (name, role, area, position) => {

    const filter = await getUsersController(name, role, area, position)

    let positions = filter.map(elem => elem.position);
    
    return [...new Set(positions)];

}


module.exports = getPositionsController;