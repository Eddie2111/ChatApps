const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
    message: {
        type: String,
        required: true,
        maxlength: 500,
        minLength: 1
    },
    sender: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        receiver: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
  { timestamps: true }, { collection: 'chat' }
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;

