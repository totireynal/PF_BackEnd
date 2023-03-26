const companiesRouter = require('express').Router();
const validatePostCompanies = require('../middlewares/companyMiddlewares/validatePostCompanies');
const validateCompanyUpdate = require('../middlewares/companyMiddlewares/validatePutCompany');
const softDeleteCompanyHandler = require('../handlers/companyHandlers/softDeleteCompanyHandler');
const softDeleteCompany = require('../middlewares/companyMiddlewares/validateSoftDeleteCompany');
const postCompaniesHandler = require('../handlers/companyHandlers/postCompaniesHandler');
const putCompanyHandler = require('../handlers/companyHandlers/putCompanyHandler');


companiesRouter.post('/register', validatePostCompanies, postCompaniesHandler)
// companiesRouter.post('/register', postCompaniesHandler);
companiesRouter.delete('/:id', softDeleteCompany, softDeleteCompanyHandler);
companiesRouter.put('/:id', validateCompanyUpdate, putCompanyHandler);


module.exports = companiesRouter;