const Post = require('../models/post');
const Writing = require('../models/writing')
const Comment = require('../models/comment')

module.exports = {
    addWritingComment,
}

async function addWritingComment(req, res){
    const comment = await Comment.create({
        comment: req.body.comment,
        user: req.user._id,
        writing: req.body.writingId
    })
    return res.status(201).json({ comment });
}

