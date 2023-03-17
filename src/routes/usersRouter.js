const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/validatePostUsers');
const validatePostFiles= require('../middlewares/validatePostFiles');
const validatePutUsers = require('../middlewares/validatePutUsers');
const getUserAndFileIdHandler = require('../handlers/usersHandlers/getUserAndFileIdHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const postFilesHandler = require('../handlers/filesHandlers/postFilesHandler');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const softDeleteUsers = require('../middlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');



usersRouter.get('/', getUsersHandler);
usersRouter.get('/:id', getUserAndFileIdHandler)
usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.post('/files', validatePostFiles, postFilesHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);


module.exports = usersRouter;