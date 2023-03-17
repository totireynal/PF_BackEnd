const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/validatePostUsers');
const validatePostFiles= require('../middlewares/validatePostFiles');
const putUserHandler = require('../handlers/putUsersHandler');
const validatePutUsers = require('../middlewares/validatePutUsers');
const postFilesHandler = require('../handlers/postFilesHandler');
const postUsersHandler = require('../handlers/postUsersHandler');
const getUsersHandler = require('../handlers/getRoutesHandlers/getUsersHandler');
const softDeleteUsers = require('../middlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/deleteUsersHandlers');



usersRouter.get('/', getUsersHandler);
usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.post('/files', validatePostFiles, postFilesHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);


module.exports = usersRouter;