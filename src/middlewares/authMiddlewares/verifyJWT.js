const { auth } = require('express-oauth2-jwt-bearer');


const verifyJWT = auth({
    audience: 'https://staffsphere/api',
    issuerBaseURL: 'https://dev-zb5ab7mg5ollsy01.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

  module.exports = verifyJWT;