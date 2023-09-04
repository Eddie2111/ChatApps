const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env.REACT_APP_JWT_SECRET;

/**
 * @name jwtdecrypt
 * @action recieves a jwt token and returns the decoded payload
 * @param {string} token
 * @returns {object} payload
 */
exports.jwtDecrypt = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}
