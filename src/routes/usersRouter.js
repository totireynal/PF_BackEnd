const usersRouter = require('express').Router();
// const validatePostUsers = require('../middlewares/validatePostUsers');
// const validatePutUsers = require('../middlewares/validatePutUsers');
const getUserAndFileIdHandler = require('../handlers/usersHandlers/getUserAndFileIdHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
// const softDeleteUsers = require('../middlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
// const validatePostUsersByCuilAndCbu = require('../middlewares/validatePostUsersbyCuilAndCbu');
const validatePostUsers = require('../middlewares/userMiddlewares/validatePostUsers');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const validatePutUsers = require('../middlewares/userMiddlewares/validatePutUsers');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const softDeleteUsers = require('../middlewares/userMiddlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
const validatePostUsersByCuilAndCbu = require('../middlewares/userMiddlewares/validatePostUsersbyCuilAndCbu');
const getUserAndFileIdHandler = require('../handlers/usersHandlers/getUserAndFileIdHandler');


usersRouter.get('/', getUsersHandler);
usersRouter.get('/:id', getUserAndFileIdHandler)
usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.post('/', validatePostUsers, validatePostUsersByCuilAndCbu, postUsersHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);
usersRouter.get('/:id', getUserAndFileIdHandler);




module.exports = usersRouter;