const {findUserById} = require('../model/userModel');
const {sign} = require('jsonwebtoken');

async function AuthCheck(req, res) {
  const {token} = req.cookies;
  const data = req.data;
  const dataset = await findUserById(data.id || token);
  console.log('dataset', dataset);
  res.json(dataset);
}

module.exports = {
  AuthCheck,
};
