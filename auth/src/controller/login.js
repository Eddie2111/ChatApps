const {validateLoginInput} = require('../validators/loginValidators');
const {findUserByEmail} = require('../model/userModel');
const {compare} = require('bcrypt');
const {sign} = require('jsonwebtoken');

async function login(req, res) {
  const {email, password} = req.body;
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
  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    console.log('invalid password');
    return res.status(200).json({errors: 'Invalid password.'});
  }
  const token = sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1d'});
  //return
  res.cookie('token', token, {
    path: '/',
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 9000000),
  });
  res.status(200).json({message: 'Login Successful'});
}

module.exports = {
  login,
};
