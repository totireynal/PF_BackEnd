// const softDeleteCompany = require('../../controllers/companyControllers/deleteCompanyController');

const softDeleteCompany  = require("../../controllers/companyControllers/deleteCompanyController");


const softDeleteCompanyHandler = async (req, res) =>{
     const { id } = req.params;
     try {
          const softDelete = await softDeleteCompany(id);
          return res.status(200).json(softDelete);
     } catch (error) {
          return res.status(400).json({error: error.message});}
     }

module.exports = softDeleteCompanyHandler;