'use strict';

/** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Files', [
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '54-233514-1',
        cbu: '170204634545000087867',
        UserId:4,
        AreaId:3,
        PositionId:4,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '422-28033514-1',
        cbu: '745404663454300087867',
        UserId:1,
        AreaId:2,
        PositionId:3,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '54-2803314-1',
        cbu: '155220466034500087867',
        UserId:3,
        AreaId:2,
        PositionId:1,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '32-28033514-1',
        cbu: '1225404665700087867',
        UserId:2,
        AreaId:1,
        PositionId:4,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '27-2803514-1',
        cbu: '15422046600567087867',
        UserId:9,
        AreaId:3,
        PositionId:4,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-28033514-1',
        cbu: '5742046603406087867',
        UserId:8,
        AreaId:2,
        PositionId:2,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-28023425-1',
        cbu: '5742046602340087867',
        UserId:8,
        AreaId:2,
        PositionId:1,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-28023433451',
        cbu: '5742046603430087867',
        UserId:9,
        AreaId:2,
        PositionId:2,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-345432-1',
        cbu: '574204660005647867',
        UserId:4,
        AreaId:2,
        PositionId:2,
      },
      {
        
        dateOfAdmission: '10/02/2022',
        cuil: '12-28453454-1',
        cbu: '57420468987000087867',
        UserId:6,
        AreaId:3,
        PositionId:4,
      },
      {
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-280345345-1',
        cbu: '57420466054430087867',
        UserId:3,
        AreaId:1,
        PositionId:2,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-345345-1',
        cbu: '57420466443543087867',
        UserId:8,
        AreaId:2,
        PositionId:2,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-2823424-1',
        cbu: '57420462343200087867',
        UserId:8,
        AreaId:3,
        PositionId:1,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-283242344-1',
        cbu: '574204663240087867',
        UserId:6,
        AreaId:3,
        PositionId:3,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-28033234234-1',
        cbu: '5742046601233087867',
        UserId:4,
        AreaId:2,
        PositionId:4,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-280234234-1',
        cbu: '57420466123123087867',
        UserId:4,
        AreaId:3,
        PositionId:1,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-2802342344-1',
        cbu: '5742046600123127867',
        UserId:4,
        AreaId:1,
        PositionId:3,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-28234234-1',
        cbu: '57420466001231230087867',
        UserId:5,
        AreaId:3,
        PositionId:1,
      },{
        

        dateOfAdmission: '10/02/2022',
        cuil: '12-2803234234-1',
        cbu: '5742041231230087867',
        UserId:7,
        AreaId:1,
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
