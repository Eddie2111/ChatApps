'use strict';
const {v4} = require('uuid');
const profileModel = require('../model/profileSchema');
/**
 * @param {Object} data
 * @return {Promise<boolean>}
 */
async function Insertion(data) {
    const dataset = {
        id: v4(), // required
        name: data.name, // required
        dob: data.dob || '',
        about: data.about || '',
        workplaces: [data.workplaces] || [],
        location: data.location || '',
        education: [data.education] || [],
        contact: data.contact || [],
        friends: data.friends || [],
    };
    const profile = new profileModel(data);
    try {
        await profile.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = Insertion;
