const getCompanyController = require('../../controllers/companyControllers/getController/getCompanyController');

const getCompanyHandler = async (req, res) => {
    try {
        const results = await getCompanyController();
        return res.status(201).json(results);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getCompanyHandler;