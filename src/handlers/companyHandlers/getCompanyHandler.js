const getCompanyController = require('../../controllers/companyControllers/getController/getCompanyController');

const getCompanyHandler = async (req, res) => {
  const { name, cuit, tel, email } = req.query;
  try {
    if(name || cuit || tel || email) {
    const results = await getCompanyController(name, cuit, tel, email);
    console.log(results, 'el pepe');
    res.status(200).json(results);
  }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCompanyHandler;
