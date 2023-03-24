const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const usersRouter = require('./routes/usersRouter');
const informationRouter = require('./routes/informationRouter');
const companiesRouter = require('./routes/companiesRouter');
const reviewsRouter = require('./routes/reviewsRouter');
const positionsRouter = require('./routes/positionsRouter');
const areasRouter = require('./routes/areasRouter');
const rolesRouter = require('./routes/rolesRouter');
const sendGridRouter = require('./routes/sendGridRouter');





const server = express();

server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use(morgan('dev'));

server.use('/info', informationRouter);
server.use('/companies', companiesRouter);
server.use('/roles', rolesRouter)


server.use('/positions', positionsRouter);
server.use('/areas', areasRouter);
server.use('/roles', rolesRouter);
server.use('/notifications', sendGridRouter);
server.use('/users', usersRouter);
server.use('/reviews', reviewsRouter);

module.exports = server;