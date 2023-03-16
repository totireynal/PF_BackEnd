const usersRouter = require('express').Router();

const softDeleteHandler = require('../handlers/deleteUsersHandlers');
const postUsersHandler = require('../handlers/postUsersHandlers');
const validatePostUsers = require('../middlewares/validatePostUsers');
const softDeleteUsers = require('../middlewares/validateSoftDeleteUsers');


usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.delete('/:id', softDeleteUsers, softDeleteHandler);

module.exports = usersRouter;