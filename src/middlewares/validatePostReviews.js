const validatePostReviews = (req, res, next) => {
    const {  scores, comment, CompanyId } = req.body;
    if (!scores) return res.status(400).json({error: 'Missing scores'});
    if (!comment) return res.status(400).json({error: 'Missing comment'});
    if (!CompanyId) return res.status(400).json({error: 'Missing CompanyId'});

    next();
}

module.exports = validatePostReviews;