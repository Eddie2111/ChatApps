const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        maxlength: 500,
        minLength: 10,
    },
    workplaces: {
        type: Array,
        maxlength: 20,
    },
    location: {
        type: String,
        maxlength: 50,
    },
    education: {
        type: Array,
        maxlength: 20,
    },
    contact: {
        type: Array,
        maxlength: 10,
    },
    friends: {
        type: Array,
        maxlength: 5000,
    },
    }, { collection: 'profiles'}
);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
