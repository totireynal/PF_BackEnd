const server = require('./src/app');
<<<<<<< HEAD
const PORT = 3001


=======
require('dotenv').config();
const PORT = 3001;


// sequelize.sync({alter: true }).then(() => 
// console.log('DB connected'),
>>>>>>> bb1ed37405f4ae2dc74d9200352cef780c323d9b
server.listen(PORT, () => {
console.log(`Server connected on ${PORT}` )
});
