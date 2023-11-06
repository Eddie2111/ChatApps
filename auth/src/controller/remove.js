const {findUserByEmail} = require('../model/userModel');
const {compare} = require('bcrypt');
const {sign} = require('jsonwebtoken');

async function login(req, res) {
  const {email} = req.body;
  /**
   *  there is something wrong with the validations
   */
  // const validationErrors = validateLoginInput(email, password);
  // if (validationErrors.length > 0) {
  //     console.log('validation errors', validationErrors);
  //     return res.status(400).json({ errors: validationErrors });
  // }
  const user = await findUserByEmail(email);
  if (!user) {
    console.log('user does not exist');
    return res.status(200).json({errors: 'User does not exist.'});
  }
  const user = {};
}

module.exports = {
  login,
};
