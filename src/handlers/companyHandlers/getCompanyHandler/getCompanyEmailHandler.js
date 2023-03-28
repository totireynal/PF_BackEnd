const getCompanyEmailController  = require('../../../controllers/companyControllers/getController/getCompanyEmailController');

const getCompanyEmailHandler = async (req, res) => {
    const { email } = req.query;
    try {
        const results = await getCompanyEmailController(email);
        return res.status(201).json(results);
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};

module.exports = getCompanyEmailHandler;