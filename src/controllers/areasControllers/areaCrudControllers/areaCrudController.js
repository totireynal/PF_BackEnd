const Area = require('../../../models').Area;

const getArea = async () => {
      const area = await Area.findAll();
      return area;
}


const postArea = async (area) => {
     const newArea = await Area.create({
          area,
     })

     return newArea
}

// const postArea = async (area) =>{

//      const newArea = await Area.create({
//           area,
     
//      })
//      return newArea;
// };


const putArea = async (id , area) => {
    
     const putArea =  await Area.findOne({
          where: {
               id
          }
     }
          );

     if(!putArea) throw new Error ('Area not found or inexistent');
     else{
          await Area.update({area},
               {
                    where:{
                         id,
                    }
               })
               
          }
     return (`successfully updated to ${area}`);
};

const deleteArea = async (id) => {

      await Area.destroy({
         where :{
          id : id
         }
     })

     if(!id) throw new Error ('Area not found or inexistent');

     return ('Area deleted')
};

module.exports = {

     deleteArea,
     putArea,
     postArea,
     getArea,
}