const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    writing: { type: mongoose.Schema.Types.ObjectId, ref: 'Writing'},
    comment: String,
    likes: [likesSchema]
})
 
module.exports = mongoose.model('Comment', commentSchema);