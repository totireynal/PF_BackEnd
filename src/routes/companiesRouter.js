const companiesRouter = require('express').Router();
const softDeleteCompanyHandler = require('../../src/handlers/companyHandlers/softDeleteCompanyHandler');
const postCompaniesHandler = require('../../src/handlers/companyHandlers/postCompaniesHandler');
const validatePostCompanies = require('../middlewares/validatePostCompanies');
const softDeleteCompany = require('../middlewares/validateSoftDeleteCompany');

companiesRouter.post('/register', validatePostCompanies, postCompaniesHandler)
companiesRouter.post('/register', postCompaniesHandler);
companiesRouter.delete('/:id', softDeleteCompany, softDeleteCompanyHandler);


module.exports = companiesRouter;