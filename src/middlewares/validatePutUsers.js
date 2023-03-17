const validatePutUsers = (req, res, next) => {
    const {  name, lastName, email, birthDate, address, image, dni, tel, role} = req.body;
    if (!name && !lastName && !email && !birthDate && !address && !image && !dni && !tel && !role) return res.status(400).json({error: 'Missing data to update'});
    

    next();
}

module.exports = validatePutUsers;