const server = require('./src/app');
// const { Sequelize } = require('./src/models/index');
require('dotenv').config();
const PORT = 3001;


// ({ alter: true }).then(() => 
// console.log('DB connected'),
server.listen(PORT, () => {
    console.log(`Server connected on ${ PORT }`)
});