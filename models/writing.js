const mongoose = require('mongoose');

const writingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    content: String,
    // likes: [likesSchema]
})

// const likesSchema = mongoose.Schema({
//   username: String,
//   userId: { type: mongoose.Schema.Types.ObjectId }
// })
 
module.exports = mongoose.model('Writing', writingSchema);