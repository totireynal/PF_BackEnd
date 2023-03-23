const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const usersRouter = require('./routes/usersRouter');
const informationRouter = require('./routes/informationRouter');
const companiesRouter = require('./routes/companiesRouter');
const reviewsRouter = require('./routes/reviewsRouter');
const positionsRouter = require('./routes/positionsRouter');
const areasRouter = require('./routes/areasRouter');
const rolesRouter = require('./routes/rolesRouter');




const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

server.use('/users', usersRouter);
server.use('/info', informationRouter);
server.use('/companies', companiesRouter);
server.use('/reviews', reviewsRouter);
server.use('/positions', positionsRouter);
server.use('/areas', areasRouter);
server.use('/roles', rolesRouter)

module.exports = server;