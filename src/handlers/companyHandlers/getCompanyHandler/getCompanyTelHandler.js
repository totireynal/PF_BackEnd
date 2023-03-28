const getCompanyTelController = require('../../../controllers/companyControllers/getController/getCompanyTelController');

const getCompanyTelHandler = async (req, res) => {
    const { phone } = req.query;
    try {
        const results = await getCompanyTelController(phone);
        return res.status(201).json(results);
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};

module.exports = getCompanyTelHandler;