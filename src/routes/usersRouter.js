const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/userMiddlewares/validatePostUsers');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const validatePutUsers = require('../middlewares/userMiddlewares/validatePutUsers');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const softDeleteUsers = require('../middlewares/userMiddlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
const validatePostUsersByCuilAndCbu = require('../middlewares/userMiddlewares/validatePostUsersbyCuilAndCbu');
const getUserAndFileIdHandler = require('../handlers/usersHandlers/getUserAndFileIdHandler');
const authenticationToken = require('../middlewares/authMiddlewares/authenticationToken');
const verifyJWT = require('../middlewares/authMiddlewares/verifyJWT');
const checkAuthorization = require('../middlewares/authMiddlewares/checkAutorization');


// usersRouter.use(verifyJWT)
usersRouter.get('/',verifyJWT, authenticationToken, checkAuthorization, getUsersHandler);



usersRouter.post('/',  validatePostUsersByCuilAndCbu, postUsersHandler);
usersRouter.put('/:id',  putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);
usersRouter.get('/:id', getUserAndFileIdHandler);




module.exports = usersRouter;