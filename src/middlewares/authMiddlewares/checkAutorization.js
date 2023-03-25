const axios = require('axios');
const Users = require('../../models').Users;

const checkAuthorization = async (req, res, next) => {

    const response = await axios('https://dev-zb5ab7mg5ollsy01.us.auth0.com/userinfo', {
        headers: {
            authorization: `Bearer ${req.auth.token}`
            }
        })
    console.log(req.auth.token)
    let email = response.data.email;
    const check = await Users.findOne({
        where: {
            email: email
        }
    })
        
    if (check===null) {
            return res.status(403).json({error: 'Not authorized'})
        } else {
            next();

        }

}





module.exports = checkAuthorization

