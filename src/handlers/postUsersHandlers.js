const Users = require('../models').Users;

const postUsersHandler = async (req, res) => {
    Users.create(req.body)
    .then((data)=>res.json({datos:data}))
    .catch((error)=>res.json({error: error.message}))
    //hacer la asociocion
    //hacer el controller
    //verificar info de req.body
}


module.exports = postUsersHandler;