const companiesRouter = require('express').Router();
const postCompaniesHandler = require('../handlers/postCompaniesHandler');
const validatePostCompanies = require('../middlewares/validatePostCompanies');

companiesRouter.post('/register', validatePostCompanies, postCompaniesHandler)

module.exports = companiesRouter;