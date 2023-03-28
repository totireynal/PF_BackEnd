const getCompanyNameController = require('../../../controllers/companyControllers/getController/getCompanyNameController');

const getCompanyNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const results = await getCompanyNameController(name);
        return res.status(201).json(results);
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};

module.exports = getCompanyNameHandler;