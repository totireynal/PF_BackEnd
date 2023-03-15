require('dotenv').config();
const { Sequelize } = require('sequelize');
// modelos

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env;

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false
});


//Modelo(database)


// Relaciones 


module.exports = {
    database, 
    ...database.models
}