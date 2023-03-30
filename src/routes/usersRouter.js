const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/userMiddlewares/validatePostUsers');
const validatePutUsers = require('../middlewares/userMiddlewares/validatePutUsers');
const softDeleteUsers = require('../middlewares/userMiddlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const validatePostUsersByCuilAndCbu = require('../middlewares/userMiddlewares/validatePostUsersbyCuilAndCbu');
const getDetailHandler = require('../handlers/usersHandlers/getDetailHandler');


// usersRouter.use(verifyJWT)
usersRouter.get('/:CompanyId', getUsersHandler);
usersRouter.get('/:CompanyId/:id', getDetailHandler);
usersRouter.post('/', validatePostUsers, validatePostUsersByCuilAndCbu, postUsersHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);


// usersRouter.post('/', validatePostUsers, postUsersHandler);


module.exports = usersRouter;