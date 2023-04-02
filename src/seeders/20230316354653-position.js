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
   await queryInterface.bulkInsert('Positions', [
    {
      position: 'Developer',
    CompanyId:1

    },
    {
      position: 'Data Entry',
    CompanyId:2

    },
    {
      position: 'Lawyer',
    CompanyId:3

    },
    {
      position: 'Salesman',
    CompanyId:2

    },
    {
      position: 'People Specialist',
    CompanyId:1

    },
    {
      position: 'Engineer',
    CompanyId:1
    },
    {
      position: 'Scrum Master',
    CompanyId:1

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
