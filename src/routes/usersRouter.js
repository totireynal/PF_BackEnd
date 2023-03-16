const usersRouter = require('express').Router();
const postUsersHandler = require('../handlers/postUsersHandlers');
const validatePostUsers = require('../middlewares/validatePostUsers');


usersRouter.post('/', validatePostUsers, postUsersHandler)

module.exports = usersRouter;