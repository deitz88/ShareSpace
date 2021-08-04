const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photoUrl: String,
    comment: String,
    // likes: [likesSchema]
})

// const likesSchema = mongoose.Schema({
//   username: String,
//   userId: { type: mongoose.Schema.Types.ObjectId }
// })
 

module.exports = mongoose.model('Post', postSchema);