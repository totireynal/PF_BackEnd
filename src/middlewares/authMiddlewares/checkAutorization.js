const axios = require('axios');
const Users = require('../../models').Users;

const checkAuthorization = async (req, res, next) => {

    try {
        const response = await axios('https://dev-zb5ab7mg5ollsy01.us.auth0.com/userinfo', {
            headers: {
                authorization: `Bearer ${req.auth.token}`
            }
        })

        const check = await Users.findOne({
            where: {
                email: response.data.email
            }
        })
        
        if (Object.keys(check).length === 0) {
            res.status(403).json({error: 'User not authorized'})
        }
     
        console.log(`${response.data.email} authorized`)
        next();
        
    } catch (error) {
        res.status(401).json({error : error.message})
        console.log(error.message)
    }
}


module.exports = checkAuthorization;