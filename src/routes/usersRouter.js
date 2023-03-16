const usersRouter = require('express').Router();
const postUsersHandler = require('../handlers/postUsersHandlers');
const validatePostUsers = require('../middlewares/validatePostUsers');
const getUsersHandler = require('../handlers/getRoutesHandlers/getUsersHandler');


usersRouter.get('/', getUsersHandler);
usersRouter.post('/', validatePostUsers, postUsersHandler);

module.exports = usersRouter;