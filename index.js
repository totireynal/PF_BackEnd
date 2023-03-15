const server = require('./src/app');
const { database } = require('./src/db');
require('dotenv').config();
const {PORT} = process.env;


database.sync({alter: true }).then(() => 
console.log('DB connected'),
server.listen(PORT, () => {
console.log(`Server connected on ${PORT}` )
}));
