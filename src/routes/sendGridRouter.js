const sendGrid = require('express').Router();
const sendGridHandler = require('../handlers/sendGridHandler/sendGridHandler');

sendGrid.post('/', sendGridHandler);

module.exports = sendGrid;