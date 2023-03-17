const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/validatePostUsers');
const validatePostFiles= require('../middlewares/validatePostUsersbyCuilAndCbu');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const validatePutUsers = require('../middlewares/validatePutUsers');
const postFilesHandler = require('../handlers/filesHandlers/postFilesHandler');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const softDeleteUsers = require('../middlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
const validatePostUsersByCuilAndCbu = require('../middlewares/validatePostUsersbyCuilAndCbu');



usersRouter.get('/', getUsersHandler);
usersRouter.post('/', validatePostUsers, validatePostUsersByCuilAndCbu, postUsersHandler);
usersRouter.post('/files', validatePostFiles, postFilesHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);


module.exports = usersRouter;