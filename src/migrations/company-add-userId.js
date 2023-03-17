module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Users', // name of Target model
            'CompanyId', // name of the key we're adding
            {
              type: Sequelize.INTEGER,
              references: {
                model: 'Companies', // name of Source model
                key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            }
          );
        }, 
        down: (queryInterface, Sequelize) => {
            return queryInterface.removeColumn(
              'Users', // name of Target model
              'CompanyId' // key we want to remove
            );
          }


    };