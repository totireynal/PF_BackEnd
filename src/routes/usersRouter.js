const usersRouter = require('express').Router();
const postUsersHandler = require('../handlers/postUsersHandler');
const validatePostUsers = require('../middlewares/validatePostUsers');
const postFilesHandler = require('../handlers/postFilesHandler');
const validatePostFiles= require('../middlewares/validatePostFiles');
const getAllUsers = require('../handlers/getAllUsers');


usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.post('/files', validatePostFiles, postFilesHandler);
usersRouter.get('/', getAllUsers);

module.exports = usersRouter;