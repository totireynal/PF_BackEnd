const eventsRouter = require('express').Router();
const putEvent = require('../controllers/eventsControllers/putEventController');
const getEventsHandler = require('../handlers/eventsHandlers/getEventHandler');
const postEventsHandler = require('../handlers/eventsHandlers/postEventHandler');
const putEventHandler = require('../handlers/eventsHandlers/putEventHandler');




eventsRouter.post('/', postEventsHandler)
eventsRouter.get('/:CompanyId', getEventsHandler)
eventsRouter.put('/:id',putEventHandler)
module.exports = eventsRouter;