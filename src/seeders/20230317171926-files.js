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
      },
          {
        dateOfAdmission: '01/02/2023',
        position: 'People Specialist',
        area: 'HHRR',
        cuil: '27-28033515-0',
        cbu: '1702046600000087806',
        UserId: '10'
      },
        {
        dateOfAdmission: '03/11/2022',
        position: 'Product Owner',
        area: 'Operations',
        cuil: '27-28033515-1',
        cbu: '1702046600000087111',
        UserId: '11'
      },
        {
        dateOfAdmission: '12/01/2022',
        position: 'Project Manager',
        area: 'Operations',
        cuil: '27-28033515-2',
        cbu: '1702046600000087906',
        UserId: '12'
      },
        {
        dateOfAdmission: '03/09/2022',
        position: 'Accountant',
        area: 'Finance',
        cuil: '27-28033515-3',
        cbu: '1702046600000087901',
        UserId: '13'
      },
        {
        dateOfAdmission: '02/05/2022',
        position: 'Lawyer',
        area: 'Legal',
        cuil: '27-28033515-4',
        cbu: '1702046600000087807',
        UserId: '14'
      },
        {
        dateOfAdmission: '01/09/2022',
        position: 'Lawyer',
        area: 'Legal',
        cuil: '27-28033515-5',
        cbu: '1702046600000087989',
        UserId: '15'
      },
        {
        dateOfAdmission: '09/07/2022',
        position: 'Project Manager',
        area: 'Operations',
        cuil: '27-28033515-6',
        cbu: '1702046600000087809',
        UserId: '16'
      },
        {
        dateOfAdmission: '12/12/2022',
        position: 'Dev Ops',
        area: 'Engineering',
        cuil: '27-28033515-7',
        cbu: '1702046600000087810',
        UserId: '17'
      },
      {
        dateOfAdmission: '02/02/2022',
        position: 'Scrum Master',
        area: 'Engineering',
        cuil: '27-28033515-8',
        cbu: '1702046600000087811',
        UserId: '18'
      },
      {
        dateOfAdmission: '08/10/2022',
        position: 'COO',
        area: 'Operations',
        cuil: '27-28033515-9',
        cbu: '1702046600000087812',
        UserId: '19'
      },
      {
        dateOfAdmission: '10/12/2022',
        position: 'Dev Ops',
        area: 'Engineering',
        cuil: '27-28033516-0',
        cbu: '1702046600000087813',
        UserId: '20'
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
