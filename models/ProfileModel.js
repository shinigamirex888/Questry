const mongooose = require('mongoose');
const Schema = mongooose.Schema;


const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    bio: {
        type: String,
        required: true
    },
    social: {
        github: {
            type: String
        },
        twitter: {
            type: String
        },
        portfolio: {
            type: String
        },
        linkedin: {
            type: String
        },
    },    

},{timestamps: true});



module.exports = mongooose.model('Profile', ProfileSchema);