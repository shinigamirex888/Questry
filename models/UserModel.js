const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    profilePicurl: {
        type: String,
    },
    newMessagePopup: {
        type: Boolean,
        default: true,
    },
    unreadMessage: {
        type: Boolean,
        default: false,
    },
    unreadNotification: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    resetToken: {
        type: String,
    },
    expireToken: {
        type: Date,
    },


},{timestamps: true});


module.exports = mongooose.model('User', UserSchema);