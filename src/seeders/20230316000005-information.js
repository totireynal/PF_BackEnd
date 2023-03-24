'use strict';
/** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Information', [
      {
        // id: uuidv4(),
        name: 'StaffSasdasd',
        tel: '9908833315',
        address: 'Avenida Siempreviva 345',
        email: 'hola@staffsphere.com',
      },
       {
        // id: uuidv4(),
        name: 'Staff2',
        tel: '990880115',
        address: 'Avenida Siempreviva 334',
        email: 'chau@staffsphere.com',
      }, {
        // id: uuidv4(),
        name: 'Staff3',
        tel: '9900115',
        address: 'Avenida Siempreviva 3435',
        email: 'aurevoir@staffsphere.com',
      }, {
        // id: uuidv4(),
        name: 'Staff4',
        tel: '9903230115',
        address: 'Avenida Siempreviva 32',
        email: 'hello@staffsphere.com',
      }, {
        // id: uuidv4(),
        name: 'Staff5',
        tel: '9902320115',
        address: 'Avenida Siempreviva 23',
        email: 'info@staffsphere.com',
      }
    ])
    /**
     * Add seed commands here.
  Seeder.associate = (models) => {
    Seeder.belongsTo(models.AnotherSeeder, {
      foreignKey: 'anotherSeederId',
      as: 'anotherSeeder',
    });
  };

  return Seeder;
    */
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
