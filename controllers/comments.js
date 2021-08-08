const Post = require('../models/post');
const Writing = require('../models/writing')
const Comment = require('../models/comment')

module.exports = {
    addWritingComment,
    deleteWritingComment
}

async function addWritingComment(req, res){
    const comment = await Comment.create({
        comment: req.body.comment,
        user: req.user._id,
        writing: req.body.writingId
    })
    return res.status(201).json({ comment });
}
async function deleteWritingComment(req, res){
    await Comment.findByIdAndDelete(req.params.id)
    return res.status(201).json('deleted comment on writing');
}
