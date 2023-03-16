const validatePostFiles = (req, res, next) => {
    const {  dateOfAdmission, position, area, cuil, cbu, UserId } = req.body;
    if (!dateOfAdmission) return res.status(400).json({error: 'Missing dateOfAdmission'});
    if (!position) return res.status(400).json({error: 'Missing position'});
    if (!area) return res.status(400).json({error: 'Missing area'});
    if (!cuil) return res.status(400).json({error: 'Missing cuil'});
    if (!cbu) return res.status(400).json({error: 'Missing cbu'});
    if (!UserId) return res.status(400).json({error: 'Missing UserId'});
    

    next();
}

module.exports = validatePostFiles;