const File = require('../../../models').File;

const getPositionsController = async () => {

    const results = await File.findAll()

    let positions = results.map(elem => elem.position);
    
    return [...new Set(positions)];

}


module.exports = getPositionsController;