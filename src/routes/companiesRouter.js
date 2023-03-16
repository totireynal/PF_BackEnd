const companiesRouter = require('express').Router();
const postCompaniesHandler = require('../handlers/postCompaniesHandler');

companiesRouter.post('/register', postCompaniesHandler)

module.exports = companiesRouter;