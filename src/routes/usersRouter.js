const usersRouter = require('express').Router();
const postUsersHandler = require('../handlers/postUsersHandler');
const validatePostUsers = require('../middlewares/validatePostUsers');
const postFilesHandler = require('../handlers/postFilesHandler');
const validatePostFiles= require('../middlewares/validatePostFiles');
const getAllUsers = require('../handlers/getAllUsers');
const putUserHandler = require('../handlers/putUsersHandler');


usersRouter.post('/', validatePostUsers, postUsersHandler);
usersRouter.post('/files', validatePostFiles, postFilesHandler);
usersRouter.get('/', getAllUsers);
usersRouter.put('/:id', putUserHandler);

module.exports = usersRouter;