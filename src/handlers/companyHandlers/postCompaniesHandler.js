const postCompaniesController = require('../../controllers/companyControllers/postController/postCompaniesController');

const postCompaniesHandler = async (req, res) => {
    const { name, cuit, industry, location, numberEmployees, tel, email, InformationId} = req.body
    
    try {
    
        const newCompany = await postCompaniesController(name, cuit, industry, location, numberEmployees, tel, email, InformationId)
        res.status(200).json(newCompany);

    } catch (error) {
        res.status(400).json({error: error.message})
}
}

module.exports = postCompaniesHandler;