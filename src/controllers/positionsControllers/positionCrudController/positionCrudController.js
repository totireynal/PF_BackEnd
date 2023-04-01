const Position = require ('../../../models').Position;

const getPosition = async () =>{
     const getPositions = await Position.findAll()
     return getPositions;
}

const postPosition = async (position, CompanyId) =>{

     const newPosition = await Position.findOrCreate({
         where:{
          position,
          CompanyId
         }
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