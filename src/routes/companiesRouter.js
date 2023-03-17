const companiesRouter = require('express').Router();
const softDeleteCompanyHandler = require('../handlers/companyHandlers/softDeleteCompanyHandler');
const postCompaniesHandler = require('../handlers/postCompaniesHandler');
const softDeleteCompany = require('../middlewares/validateSoftDeleteCompany');

companiesRouter.post('/register', postCompaniesHandler);
companiesRouter.delete('/:id', softDeleteCompany, softDeleteCompanyHandler);

module.exports = companiesRouter;