const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/userMiddlewares/validatePostUsers');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const validatePutUsers = require('../middlewares/userMiddlewares/validatePutUsers');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const softDeleteUsers = require('../middlewares/userMiddlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
const validatePostUsersByCuilAndCbu = require('../middlewares/userMiddlewares/validatePostUsersbyCuilAndCbu');
const getDetailHandler = require('../handlers/usersHandlers/getDetailHandler');
const authenticationToken = require('../middlewares/authMiddlewares/authenticationToken');
const verifyJWT = require('../middlewares/authMiddlewares/verifyJWT');
const checkAuthorization = require('../middlewares/authMiddlewares/checkAutorization');


// usersRouter.use(verifyJWT)
usersRouter.get('/',verifyJWT, authenticationToken, checkAuthorization, getUsersHandler);
usersRouter.post('/', validatePostUsers, validatePostUsersByCuilAndCbu, postUsersHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);
usersRouter.get('/:id', getDetailHandler);




module.exports = usersRouter;