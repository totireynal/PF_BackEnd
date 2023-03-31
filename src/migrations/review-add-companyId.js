module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'Reviews', // name of Source model
        'CompanyId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Companies', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'Reviews', // name of Source model
        'CompanyId' // key we want to remove
      );
    }
  };