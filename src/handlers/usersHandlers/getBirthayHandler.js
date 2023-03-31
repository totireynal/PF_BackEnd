const getBirthdayController = require('../../controllers/usersControllers/getControllers/getBirthdayController');

const getBirthdayHandler = async(req, res) => {
    try {
        const resultDate = await getBirthdayController();
        // console.log(resultDate, 'Fecha');
        return res.status(201).json(resultDate);
    } catch (error) {
        return res.status(404).json(error)
    }
};

module.exports = getBirthdayHandler;