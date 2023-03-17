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
