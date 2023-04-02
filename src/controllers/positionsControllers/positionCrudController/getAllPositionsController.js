const Position = require ('../../../models').Position;

const getPosition = async () =>{
     const getPositions = await Position.findAll()
     return getPositions;
}


module.exports = getPosition;