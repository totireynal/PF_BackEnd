const server = require('./src/app');
const { sequelize } = require('./src/models/index');
require('dotenv').config();
const PORT = 3001


// sequelize.sync({alter: true }).then(() => 
// console.log('DB connected'),
server.listen(PORT, () => {
console.log(`Server connected on ${PORT}` )
});
