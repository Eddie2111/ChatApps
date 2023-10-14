const {updateUser, updateUserAuth} = require('../model/userModel');
const {v4: uuidv4} = require('uuid');
const {hash} = require('bcrypt');

const updateProfile = async (req, res) => {
  const data = req.body;
  await updateUser(data)
    .then((user) => {
      if (user) {
        res.status(200).json({
          status: 'success',
          data: user,
        });
      } else {
        res.status(400).json({
          status: 'fail',
          message: 'something went wrong',
          reason: user,
        });
      }
    })
    .catch((error) => {
      res.status(400).json({
        status: 'fail',
        message: error,
      });
    });
};
const UpdateUser = async (req, res) => {
  const data = req.body;
  await updateUserAuth(data)
    .then((user) => {
      if (user) {
        // if success
        res.status(200).json({
          status: 'success',
          data: user,
        });
      } else {
        // if not success
        console.log('failing');
        res.status(400).json({
          status: 'fail',
          message: 'something went wrong',
          reason: user,
        });
      }
    })
    .catch((error) => {
      // serious failing issue
      console.log('serious failing issue');
      res.status(400).json({
        status: 'fail',
        message: error,
      });
    });
};
module.exports = {
  updateProfile,
  UpdateUser,
};
