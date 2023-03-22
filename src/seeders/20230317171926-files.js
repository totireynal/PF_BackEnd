'use strict';

/** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Files', [
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '54-233514-1',
        cbu: '1702046600000087867',
        UserId:4,
        AreaId:3,
        PositionId:4,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '422-28033514-1',
        cbu: '7454046600000087867',
        UserId:1,
        AreaId:2,
        PositionId:3,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '54-2803314-1',
        cbu: '15522046600000087867',
        UserId:3,
        AreaId:2,
        PositionId:1,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '32-28033514-1',
        cbu: '12254046600000087867',
        UserId:7,
        AreaId:1,
        PositionId:4,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '27-2803514-1',
        cbu: '15422046600000087867',
        UserId:9,
        AreaId:3,
        PositionId:4,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-28033514-1',
        cbu: '5742046600000087867',
        UserId:8,
        AreaId:2,
        PositionId:2,
      },
      
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
