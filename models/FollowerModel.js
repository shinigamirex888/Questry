const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const FollowerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    followers: [{
        user: Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        user: Schema.Types.ObjectId,
        ref: 'User'
    }],
});

export default mongooose.model('Follower', FollowerSchema);