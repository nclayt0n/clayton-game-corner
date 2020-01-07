require('dotenv').config();
module.exports = {
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
    TOKEN_KEY: 'cgc-client-auth-token',
    JWT_EXPIRY: process.env.JWY_EXPIRY || '20s'
};