const Company = require('../../../models').Company;

const validatePostCompaniesRepeated = async (req, res, next) => {
    const { name, tel, email } = req.body;

    const findByName = await Company.findOne({
        where: { name: name }
    });
    
    const findByTel = await Company.findOne({
        where: { tel: tel }
    });
    
    const findByEmail = await Company.findOne({
        where: { email: email }
    })

    if(findByName) return res.status(404).json({ error: `The name: ${name} already exists in system. Please try another one.` });
    if(findByTel) return res.status(404).json({ error: `The phone: ${tel} already exists in system. Please try another one.` });
    if(findByEmail) return res.status(404).json({ error: `The email: ${email} already exists in system. Please try another one.` });

    next();
};

module.exports = validatePostCompaniesRepeated;