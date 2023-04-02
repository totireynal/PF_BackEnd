const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/userMiddlewares/validatePostUsers');
const validatePutUsers = require('../middlewares/userMiddlewares/validatePutUsers');
const softDeleteUsers = require('../middlewares/userMiddlewares/validateSoftDeleteUsers');
const softDeleteHandler = require('../handlers/usersHandlers/deleteUsersHandlers');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler');
const putUserHandler = require('../handlers/usersHandlers/putUsersHandler');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const getDetailHandler = require('../handlers/usersHandlers/getDetailHandler');
const restoreUserHandler = require('../handlers/usersHandlers/restoreUserHandler');
const getDeletedHandler = require('../handlers/usersHandlers/getDeletedHandler');
const getBirthdayHandler = require('../handlers/usersHandlers/getBirthayHandler');
const getValidateUserHandler = require('../handlers/usersHandlers/getValidateUserHandler');


usersRouter.get('/:CompanyId', getUsersHandler);
usersRouter.get('/:CompanyId/birthday', getBirthdayHandler);
usersRouter.get('/:CompanyId/validate', getValidateUserHandler);
usersRouter.get('/:CompanyId/deleted', getDeletedHandler);
usersRouter.get('/:id', getDetailHandler);
usersRouter.get('/:CompanyId/:id', getDetailHandler);
usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.put('/restore/:id', restoreUserHandler);
usersRouter.put('/:id',validatePutUsers, putUserHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);


module.exports = usersRouter;