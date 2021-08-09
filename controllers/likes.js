const Post = require("../models/post");
const Writing = require("../models/writing");
const Comment = require("../models/comment");

module.exports = {
  addLike,
  deleteLike,
  addLikeWriting,
  deleteLikeWriting,
  addLikeComment,
  deleteLikeComment,
  addLikePost
};


async function addLike(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.likes.push({ username: req.user.username, userId: req.user._id });
    await post.save();
    res.status(201).json({ data: "added like" });
  } catch (err) {
    res.json({ data: err });
  }
}

async function deleteLike(req, res) {
  try {
    const post = await Post.findOne({
      "likes._id": req.params.id,
      "likes.username": req.user.username,
    });
    post.likes.remove(req.params.id);
    await post.save();
    res.json({ data: "removed like" });
  } catch (err) {
    res.json({ error: err });
  }
}
async function addLikeWriting(req, res) {
  try {
    const writing = await Writing.findById(req.params.id);
    writing.likes.push({ username: req.user.username, userId: req.user._id });
    await writing.save();
    res.status(201).json({ data: "added like" });
  } catch (err) {
    res.json({ data: err });
  }
}

async function addLikePost(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      post.likes.push({ username: req.user.username, userId: req.user._id });
      await post.save();
      res.status(201).json({ data: "added like" });
    } catch (err) {
      res.json({ data: err });
    }
  }

async function addLikeComment(req, res) {
  try {
    const comment = await Comment.findById(req.params.id);
    comment.likes.push({ username: req.user.username, userId: req.user._id });
    await comment.save();
    res.status(201).json({ data: "added like" });
  } catch (err) {
    res.json({ data: err });
  }
}

async function deleteLikeWriting(req, res) {
  try {
    const writing = await Writing.findOne({
      "likes._id": req.params.id,
      "likes.username": req.user.username,
    });
    writing.likes.remove(req.params.id);
    await writing.save();
    res.json({ data: "removed like" });
  } catch (err) {
    res.json({ error: err });
  }
}

async function deleteLikeComment(req, res) {
  try {
    const comment = await Comment.findOne({
      "likes._id": req.params.id,
      "likes.username": req.user.username,
    });
    comment.likes.remove(req.params.id);
    await comment.save();
    res.json({ data: "removed like" });
  } catch (err) {
    res.json({ error: err });
  }
}
