const Post = require('../models/post');
const Writing = require('../models/writing')

module.exports = {
    addLike,
    deleteLike, 
    addLikeWriting,
    deleteLikeWriting, 
}

async function addLike(req, res){
    try {
        const post = await Post.findById(req.params.id);
        post.likes.push({username: req.user.username, userId: req.user._id}); 
        await post.save()
        res.status(201).json({data: 'added like'})
    } catch(err){
        res.json({data: err})
    }
    
}

async function deleteLike(req, res){
    console.log(hitting)
    try {
        const writing = await Writing.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        writing.likes.remove(req.params.id) 
        await writing.save() 
        res.json({data: 'removed like'})
    } catch(err){
        res.json({error: err})
    }
}
async function addLikeWriting(req, res){
 
    try {
        const writing = await Writing.findById(req.params.id);
        writing.likes.push({username: req.user.username, userId: req.user._id}); 
        await writing.save()
        res.status(201).json({data: 'added like'})
    } catch(err){
        res.json({data: err})
    }
    
}

async function deleteLikeWriting(req, res){
    try {
        const writing = await Writing.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        writing.likes.remove(req.params.id) 
        await writing.save() 
        res.json({data: 'removed like'})
    } catch(err){
        res.json({error: err})
    }
}

