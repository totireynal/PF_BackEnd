const usersRouter = require('express').Router();
const validatePostUsersByCuilAndCbu = require('../middlewares/userMiddlewares/validatePostUsersbyCuilAndCbu');
const validatePostUsers = require('../middlewares/userMiddlewares/validatePostUsers');
const validatePutUsers = require('../middlewares/userMiddlewares/validatePutUsers');
const softDeleteUsers = require('../middlewares/userMiddlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
const getUserAndFileIdHandler = require('../handlers/usersHandlers/getUserAndFileIdHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const postCloudinaryHandler = require('../handlers/usersHandlers/postCloudinaryHandler');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');


usersRouter.get('/', getUsersHandler);
usersRouter.get('/:id', getUserAndFileIdHandler);
usersRouter.post('/', postCloudinaryHandler);
usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.post('/', validatePostUsers, validatePostUsersByCuilAndCbu, postUsersHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);




module.exports = usersRouter;