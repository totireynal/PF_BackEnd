const server = require('./src/app');
<<<<<<< HEAD
// const { Sequelize } = require('./src/models/index');
require('dotenv').config();
const { PORT } = process.env;


// ({ alter: true }).then(() => 
// console.log('DB connected'),
server.listen(PORT, () => {
    console.log(`Server connected on ${ PORT }`)
});
=======
const { sequelize } = require('./src/models/index');
require('dotenv').config();
const PORT = 3001


// sequelize.sync({alter: true }).then(() => 
// console.log('DB connected'),
server.listen(PORT, () => {
console.log(`Server connected on ${PORT}` )
});
>>>>>>> 45a37d6ac7aa883d5023dde080cc85b6126aa15f
