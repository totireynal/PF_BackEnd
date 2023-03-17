const validatePostUsers = (req, res, next) => {
    const {  name, lastName, email, birthDate, address, image, dni, tel, role, CompanyId,  dateOfAdmission, position, area, cuil, cbu } = req.body;
    if (!name) return res.status(400).json({error: 'Missing name'});
    if (!lastName) return res.status(400).json({error: 'Missing lastname'});
    if (!email) return res.status(400).json({error: 'Missing email'});
    if (!birthDate) return res.status(400).json({error: 'Missing birthDate'});
    if (!address) return res.status(400).json({error: 'Missing address'});
    if (!image) return res.status(400).json({error: 'Missing image'});
    if (!dni) return res.status(400).json({error: 'Missing dni'});
    if (!tel) return res.status(400).json({error: 'Missing tel'});
    if (!role) return res.status(400).json({error: 'Missing role'});
    if (!CompanyId) return res.status(400).json({error: 'Missing CompanyId'});
    if (!dateOfAdmission) return res.status(400).json({error: 'Missing dateOfAdmission'});
    if (!position) return res.status(400).json({error: 'Missing position'});
    if (!area) return res.status(400).json({error: 'Missing area'});
    if (!cuil) return res.status(400).json({error: 'Missing cuil'});
    if (!cbu) return res.status(400).json({error: 'Missing cbu'});



    next();
}

module.exports = validatePostUsers;