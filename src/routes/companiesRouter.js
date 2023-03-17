const companiesRouter = require('express').Router();
const softDeleteCompanyHandler = require('../handlers/companyHandlers/softDeleteCompanyHandler');
const postCompaniesHandler = require('../handlers/companyHandlers/postCompaniesHandler');
const validatePostCompanies = require('../middlewares/validatePostCompanies');
const softDeleteCompany = require('../middlewares/validateSoftDeleteCompany');
const validateCompanyUpdate = require('../middlewares/validatePutCompany');
const putCompanyHandler = require('../handlers/companyHandlers/putCompanyHandler');


companiesRouter.post('/register', validatePostCompanies, postCompaniesHandler)
companiesRouter.post('/register', postCompaniesHandler);
companiesRouter.delete('/:id', softDeleteCompany, softDeleteCompanyHandler);
companiesRouter.put('/:id', validateCompanyUpdate, putCompanyHandler);


module.exports = companiesRouter;