const companiesRouter = require("express").Router();
const softDeleteCompanyHandler = require("../handlers/companyHandlers/softDeleteCompanyHandler");
const postCompaniesHandler = require("../handlers/companyHandlers/postCompaniesHandler");
const validatePostCompanies = require("../middlewares/companyMiddlewares/validatePostCompanies");
const validateCompanyUpdate = require("../middlewares/companyMiddlewares/validatePutCompany");
const validatePostCompaniesRepeated = require("../middlewares/companyMiddlewares/validatePostCompaniesRepeated");
const softDeleteCompany = require("../middlewares/companyMiddlewares/validateSoftDeleteCompany");
const putCompanyHandler = require("../handlers/companyHandlers/putCompanyHandler");
const getCompanyValidateHandler = require("../handlers/companyHandlers/getCompanyValidateHandler");
const getCompanyHandler = require("../handlers/companyHandlers/getCompanyHandler");

companiesRouter.get("/validate", getCompanyValidateHandler);
companiesRouter.get("/", getCompanyHandler);
companiesRouter.post(
  "/register",
  validatePostCompanies,
  validatePostCompaniesRepeated,
  postCompaniesHandler
);
companiesRouter.delete("/:id", softDeleteCompany, softDeleteCompanyHandler);
companiesRouter.put("/:id", validateCompanyUpdate, putCompanyHandler);

module.exports = companiesRouter;
