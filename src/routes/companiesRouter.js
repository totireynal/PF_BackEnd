const companiesRouter = require('express').Router();
const validatePostCompanies = require('../middlewares/companyMiddlewares/validatePostCompanies');
const validateCompanyUpdate = require('../middlewares/companyMiddlewares/validatePutCompany');
const softDeleteCompanyHandler = require('../handlers/companyHandlers/softDeleteCompanyHandler');
const softDeleteCompany = require('../middlewares/companyMiddlewares/validateSoftDeleteCompany');
const postCompaniesHandler = require('../handlers/companyHandlers/postCompaniesHandler');
const putCompanyHandler = require('../handlers/companyHandlers/putCompanyHandler');
const getCompanyCuitHandler = require('../handlers/companyHandlers/getCompanyHandler/getCompanyCuitHandler');
const getCompanyNameHandler = require('../handlers/companyHandlers/getCompanyHandler/getCompanyNameHandler');
const getCompanyTelHandler = require('../handlers/companyHandlers/getCompanyHandler/getCompanyTelHandler');
const getCompanyEmailHandler = require('../handlers/companyHandlers/getCompanyHandler/getCompanyEmailHandler');

companiesRouter.get('/', getCompanyEmailHandler);
companiesRouter.get('/', getCompanyCuitHandler);
companiesRouter.get('/', getCompanyNameHandler);
companiesRouter.get('/', getCompanyTelHandler);
companiesRouter.post('/register', validatePostCompanies, postCompaniesHandler)
companiesRouter.delete('/:id', softDeleteCompany, softDeleteCompanyHandler);
companiesRouter.put('/:id', validateCompanyUpdate, putCompanyHandler);


module.exports = companiesRouter;