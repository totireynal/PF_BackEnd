const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const usersRouter = require('./routes/usersRouter');
const informationRouter = require('./routes/informationRouter');
const companiesRouter = require('./routes/companiesRouter');
const reviewsRouter = require('./routes/reviewsRouter');



const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

server.use('/users', usersRouter);
server.use('/info', informationRouter);
server.use('/companies', companiesRouter);
server.use('/reviews', reviewsRouter);

module.exports = server;