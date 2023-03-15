<<<<<<< HEAD

const name = 'El Pepe';
console.log('sofi');
console.log('carlos');

=======
const server = require('./src/app');
const { database } = require('./src/db');
require('dotenv').config();
const {PORT} = process.env;


database.sync({alter: true }).then(() => 
console.log('DB connected'),
server.listen(PORT, () => {
console.log(`Server connected on ${PORT}` )
}));
>>>>>>> 4438f51b53f1add9d354860f3e9465d871ac77cb
