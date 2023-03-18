// const { op } = require('sequelizer');
const File = require('../../models').File;
const Users = require('../../models').Users;

const getUserPositionFilter = async (position) => {

     const filePosition = await File.findAll({
          where: {
              position
          },
          include: {
               model: Users,
               attributes: ['name', 'lastName', 'image'],
          
          }
     });
     return filePosition;
};

module.exports = getUserPositionFilter;