'use strict'
const client = require('../lib/elasticSearch')
const Profile = require('../model/profileSchema')
const { v4: uuidv4 } = require('uuid')
const { validate } = require('uuid')
const { ObjectId } = require('mongodb')

/**
 * @function getProfileByID
 * @param {Object} data
 * @param {String} data.id
 * @param {String} data.name
 * @param {String} data.dob
 * @return {Object} profile
 */
async function getProfileByID (data) { // single profile
  const { id } = data
  const profile = await Profile.findOne({ id })
  if (profile) {
    return profile
  } else {
    return null
  }
}

/**
 * @function getProfileByMultiple
 * @param {Object} data
 * @param {String} data.id
 * @param {String} data.name
 * @param {String} data.dob
 * @return {Object} profile
 */
async function getProfileByMultple (data) {
  // getting multiple profiles using elasticsearch
  const { ids } = data
  const profiles = await client.mget({
    index: 'profiles',
    body: {
      ids
    }
  })
  if (profiles) {
    return profiles
  }
  return null
};

module.exports = {
  getProfileByID,
  getProfileByMultple
}
// Path: profile/controller/profileInserting.js
