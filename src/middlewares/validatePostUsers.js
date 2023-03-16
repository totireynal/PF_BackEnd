const validatePostUsers = (req, res, next) => {
    const {  name, lastName, email, birthDate, address, image, dni, tel, role } = req.body;
    if (!name) return res.status(400).json({error: 'Missing name'});
    if (!lastName) return res.status(400).json({error: 'Missing lastname'});
    if (!email) return res.status(400).json({error: 'Missing email'});
    if (!birthDate) return res.status(400).json({error: 'Missing birthDate'});
    if (!address) return res.status(400).json({error: 'Missing address'});
    if (!image) return res.status(400).json({error: 'Missing image'});
    if (!dni) return res.status(400).json({error: 'Missing dni'});
    if (!tel) return res.status(400).json({error: 'Missing tel'});
    if (!role) return res.status(400).json({error: 'Missing role'});

    next();
}

module.exports = validatePostUsers;