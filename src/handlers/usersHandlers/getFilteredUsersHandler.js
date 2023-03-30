const getFilteredUsersController = require("../../controllers/usersControllers/getControllers/getFilteredUsersController");

const getFilteredUsersHandler = async (req, res) => {
    const { name, role, area, position, sort} = req.query;
    const {CompanyId} = req.params;
    console.log(req.query)
    console.log(req.params)

    try {
        if (CompanyId  && (name || role || area || position || sort)) {
          const resultsUsers = await getFilteredUsersController(
            name,
            role,
            area,
            position,
            sort,
            CompanyId
          );
          return res.status(201).json(resultsUsers);
        }
      } catch (error) {
        return res.status(404).json({ error: error.message });
      }
    };



module.exports = getFilteredUsersHandler;