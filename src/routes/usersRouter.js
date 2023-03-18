const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/validatePostUsers');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const validatePutUsers = require('../middlewares/validatePutUsers');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const softDeleteUsers = require('../middlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
const validatePostUsersByCuilAndCbu = require('../middlewares/validatePostUsersbyCuilAndCbu');
const getUserAndFileIdHandler = require('../handlers/usersHandlers/getUserAndFileIdHandler');




usersRouter.get('/', getUsersHandler);
usersRouter.post('/', validatePostUsers, validatePostUsersByCuilAndCbu, postUsersHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);
usersRouter.get('/:id', getUserAndFileIdHandler);




module.exports = usersRouter;