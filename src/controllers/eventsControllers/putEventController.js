const calendar = require ('../../models').calendar;


const putEvent = async (id , title, description , label, day , eventId ) => {
 
     await calendar.update({
          title, description , label, day , eventId,
     },{where:{
               id
          }
     })
   
     return `the ${title} event has been successfully updated`
}


module.exports = putEvent;