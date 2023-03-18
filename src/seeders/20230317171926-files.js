'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Files', [
      {
        dateOfAdmission: '10/02/2022',
        position: 'Dev Ops',
        area: 'Engineering',
        cuil: '27-28033514-1',
        cbu: '1702046600000087867',
        UserId: '1'
      },
      {
        dateOfAdmission: '05/09/2022',
        position: 'Dev Ops',
        area: 'Engineering',
        cuil: '27-28033514-2',
        cbu: '1702046600000087868',
        UserId: '2'
      },
      {
        dateOfAdmission: '12/11/2022',
        position: 'Dev Ops',
        area: 'Engineering',
        cuil: '27-28033514-3',
        cbu: '1702046600000087869',
        UserId: '3'
      },
        {
        dateOfAdmission: '09/02/2023',
        position: 'CTO',
        area: 'Engineering',
        cuil: '27-28033514-4',
        cbu: '1702046600000087800',
        UserId: '4'
      },
        {
        dateOfAdmission: '08/11/2021',
        position: 'Head of People',
        area: 'HHRR',
        cuil: '27-28033514-5',
        cbu: '1702046600000087801',
        UserId: '5'
      },
        {
        dateOfAdmission: '01/04/2022',
        position: 'People Specialist',
        area: 'HHRR',
        cuil: '27-28033514-6',
        cbu: '1702046600000087802',
        UserId: '6'
      },
        {
        dateOfAdmission: '02/10/2021',
        position: 'Project Manager',
        area: 'Operations',
        cuil: '27-28033514-7',
        cbu: '1702046600000087803',
        UserId: '7'
      },
        {
        dateOfAdmission: '05/11/2021',
        position: 'Product Owner',
        area: 'Marketing',
        cuil: '27-28033514-8',
        cbu: '1702046600000087804',
        UserId: '8'
      },
        {
        dateOfAdmission: '17/10/2022',
        position: 'Scrum Master',
        area: 'Engineering',
        cuil: '27-28033514-9',
        cbu: '1702046600000087805',
        UserId: '9'
      }
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
