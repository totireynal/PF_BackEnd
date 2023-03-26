const Position = require ('../../../models').Position;

const getPosition = async () =>{
     const getPositions = await Position.findAll()
     return getPositions;
}

const postPosition = async (position) =>{

     const newPosition = await Position.create({
          position
     })
     return newPosition
};

const putPosition = async (id, position) =>{
    const putPosition = await Position.findOne({
     id
    })

    if(!putPosition) throw new Error ("Position not found")

     await Position.update({position},{
          where: {
               id
          }
     })
     return
}

const deletePosition = async ( id ) => {
     
     await Position.destroy({
           where :{
               id
           }
     })
     if(!id) throw new Error ('Position not found or inexistent');

     return ('Position deleted')
}

module.exports = {
     postPosition,
     putPosition,
     deletePosition,
     getPosition,
}