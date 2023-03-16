const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const usersRouter = require('./routes/usersRouter');



const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

server.use('/users', usersRouter);

module.exports = server;