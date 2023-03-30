const Users = require('../../../models').Users;
const File = require('../../../models').File;
// const Area = require('../../../models').Area;
// const Position = require('../../../models').Position;

const softDeleteUsers = async (id) => {
    
    await File.destroy({
        where:{
            UserId : id ,
        },include :[{
            model: Users.destroy({
                where: {
                    id,
                },
            })
        }]
    })
    //  await Users.destroy({
    //     where: {
    //         id ,
    //     },include :[{
    //         model: File.destroy({
    //             where: {
    //                 UserId : id ,
    //             }}),
    //      }]
        
    // })
    return `The user ${id} has been deleted`;
}

module.exports = softDeleteUsers;