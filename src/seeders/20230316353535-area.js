'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Areas', [
    {
    area: 'Engineering',
    CompanyId:1
   },
   {
    area: 'Operations',
    CompanyId:2

   },
   {
     area: 'Legals',
    CompanyId:3
   },
   {
     area: 'HHRR',
    CompanyId:3
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
