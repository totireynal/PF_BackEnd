const axios = require('axios');

const authenticationToken = async (req, res, next) => {

    try {
        
        const response = await axios('https://dev-zb5ab7mg5ollsy01.us.auth0.com/userinfo', {
            headers: {
                authorization: `Bearer ${req.auth.token}`
            }
        })
       
        console.log(response.data)
        if (response.data.email_verified) 
          
            next();
        

        
    } catch (error) {
        res.status(401).json({error : error.message})
       
    }
}

module.exports = authenticationToken;