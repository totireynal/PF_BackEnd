const getUserPositionFilter = require('../../controllers/usersControllers/getUserPositionFilter');

const getUserPositionFilterHandler = async (req, res) => {
     const { position } = req.query;

     try {
          const filePosition = await getUserPositionFilter(position);
          res.status(200).json(filePosition);
     } catch (error) {
        return res.status(404).json({ error: error.message })
          
     }
};
module.exports = getUserPositionFilterHandler;