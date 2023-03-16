const usersRouter = require('express').Router();
const postUsersHandler = require('../handlers/postUsersHandlers');


usersRouter.post('/', postUsersHandler)

module.exports = usersRouter;