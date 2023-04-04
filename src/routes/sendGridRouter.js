const sendGrid = require('express').Router();
const sendGridHandler = require('../handlers/sendGridHandler/sendGridHandler');
const sendGridHandlerAuto = require('../handlers/sendGridHandler/sendGridHandlerAuto');
const validatePostSendGrid = require('../middlewares/validatePostSendGrid');
const validatePostSendGridAuto = require('../middlewares/validatePostSendGridAuto');

sendGrid.post('/', validatePostSendGrid, sendGridHandler);
sendGrid.post('/confirmation', validatePostSendGridAuto, sendGridHandlerAuto);

module.exports = sendGrid;