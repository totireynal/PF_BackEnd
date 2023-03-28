const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/userMiddlewares/validatePostUsers');
const validatePutUsers = require('../middlewares/userMiddlewares/validatePutUsers');
const softDeleteUsers = require('../middlewares/userMiddlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const validatePostUsersByCuilAndCbu = require('../middlewares/userMiddlewares/validatePostUsersbyCuilAndCbu');
const getDetailHandler = require('../handlers/usersHandlers/getDetailHandler');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const getBirthdayHandler = require('../handlers/usersHandlers/getBirthayHandler');
const authenticationToken = require('../middlewares/authMiddlewares/authenticationToken');
const verifyJWT = require('../middlewares/authMiddlewares/verifyJWT');
const checkAuthorization = require('../middlewares/authMiddlewares/checkAutorization');


// usersRouter.use(verifyJWT)
usersRouter.get('/birthDate', getBirthdayHandler)
usersRouter.get('/', getUsersHandler);
// usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.post('/', validatePostUsers, validatePostUsersByCuilAndCbu, postUsersHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);
usersRouter.get('/:id', getDetailHandler);




module.exports = usersRouter;