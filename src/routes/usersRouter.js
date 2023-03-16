const usersRouter = require('express').Router();
const validatePostUsers = require('../middlewares/validatePostUsers');
const validatePostFiles= require('../middlewares/validatePostFiles');
const postFilesHandler = require('../handlers/postFilesHandler');
const postUsersHandler = require('../handlers/postUsersHandler');
const getUsersHandler = require('../handlers/getRoutesHandlers/getUsersHandler');


usersRouter.get('/', getUsersHandler);
usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.post('/files', validatePostFiles, postFilesHandler);

module.exports = usersRouter;