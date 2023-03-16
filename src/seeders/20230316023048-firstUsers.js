'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
  {
    name: 'Juan',
    lastName: 'Avila',
    email: 'ejemplo2@gmail.com',
    birthDate: '05/07/1998',
    address: 'Avenida Falsa 124',
    image: 'url1',
    dni:'36545332',
    tel:'990987267',
    role:'User',
    createdAt:'2023-01-19 03:14:07',
    updatedAt:'2023-01-19 03:14:07'
},
{
  name: 'Estiven',
  lastName: 'Moica',
  email: 'ejemplo3@gmail.com',
  birthDate: '03/12/2000',
  address: 'Avenida Falsa 125',
  image: 'url2',
  dni:'36543338',
  tel:'990987277',
  role:'User',
  createdAt:'2023-01-19 03:14:07',
  updatedAt:'2023-01-19 03:14:07'
},
{
  name: 'Didier',
  lastName: 'Brange',
  email: 'ejemplo4@gmail.com',
  birthDate: '11/03/1999',
  address: 'Avenida Falsa 126',
  image: 'url3',
  dni:'36544444',
  tel:'990987288',
  role:'User',
  createdAt:'2023-01-19 03:14:07',
  updatedAt:'2023-01-19 03:14:07'
},
{
  name: 'Francisco',
  lastName: 'Toti',
  email: 'ejemplo5@gmail.com',
  birthDate: '12/06/1991',
  address: 'Avenida Falsa 127',
  image: 'url4',
  dni:'36545555',
  tel:'990987299',
  role:'User',
  createdAt:'2023-01-19 03:14:07',
  updatedAt:'2023-01-19 03:14:07'
},
{
  name: 'Carlos',
  lastName: 'Martinez',
  email: 'ejemplo6@gmail.com',
  birthDate: '09/07/1990',
  address: 'Avenida Falsa 128',
  image: 'url5',
  dni:'36546666',
  tel:'990987200',
  role:'User',
  createdAt:'2023-01-19 03:14:07',
  updatedAt:'2023-01-19 03:14:07'
},
{
  name: 'Pablo',
  lastName: 'Cogno',
  email: 'ejemplo7@gmail.com',
  birthDate: '02/02/1995',
  address: 'Avenida Falsa 129',
  image: 'url6',
  dni:'36547777',
  tel:'990987111',
  role:'User',
  createdAt:'2023-01-19 03:14:07',
  updatedAt:'2023-01-19 03:14:07'
},
{
  name: 'Josefina',
  lastName: 'Morande',
  email: 'ejemplo8@gmail.com',
  birthDate: '06/09/1989',
  address: 'Avenida Falsa 130',
  image: 'url7',
  dni:'36548888',
  tel:'990987222',
  role:'User',
  createdAt:'2023-01-19 03:14:07',
  updatedAt:'2023-01-19 03:14:07'
},
{
  name: 'Virginia',
  lastName: 'Gonzalez',
  email: 'ejemplo9@gmail.com',
  birthDate: '04/05/1985',
  address: 'Avenida Falsa 131',
  image: 'url8',
  dni:'36549999',
  tel:'990987333',
  role:'User',
  createdAt:'2023-01-19 03:14:07',
  updatedAt:'2023-01-19 03:14:07'
},
{
  name: 'Juliana',
  lastName: 'Mora',
  email: 'ejemplo10@gmail.com',
  birthDate: '12/09/1976',
  address: 'Avenida Falsa 132',
  image: 'url9',
  dni:'36500000',
  tel:'990987444',
  role:'Admin',
  createdAt:'2023-01-19 03:14:07',
  updatedAt:'2023-01-19 03:14:07'
},

  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
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
