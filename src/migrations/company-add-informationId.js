module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Companies', // name of Target model
            'InformationId', // name of the key we're adding
            {
              type: Sequelize.INTEGER,
              defaultValue: 1,
              references: {
                model: 'Information', // name of Source model
                key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            }
          );
        }, 
        down: (queryInterface, Sequelize) => {
            return queryInterface.removeColumn(
              'Companies', // name of Target model
              'InformationId' // key we want to remove
            );
          }
        }