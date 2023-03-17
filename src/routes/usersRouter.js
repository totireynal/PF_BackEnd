const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/validatePostUsers');
const validatePostFiles= require('../middlewares/validatePostFiles');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const validatePutUsers = require('../middlewares/validatePutUsers');
<<<<<<< HEAD
const postFilesHandler = require('../handlers/postFilesHandler');
const postUsersHandler = require('../handlers/postUsersHandler');
const getUsersHandler = require('../handlers/getRoutesHandlers/getUsersHandler');
const getUserAndFileIdHandler = require('../handlers/getRoutesHandlers/getUserAndFileIdHandler');
=======
const postFilesHandler = require('../handlers/filesHandlers/postFilesHandler');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
>>>>>>> 87521e9bffc7ffbba58bd0d8be758b575fe3c71f
const softDeleteUsers = require('../middlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');



usersRouter.get('/', getUsersHandler);
usersRouter.get('/:id', getUserAndFileIdHandler)
usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.post('/files', validatePostFiles, postFilesHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);


module.exports = usersRouter;