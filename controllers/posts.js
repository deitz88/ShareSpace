const User = require("../models/user");
const Writing = require("../models/writing");
const Comment = require("../models/comment")
const Post = require("../models/post");
const jwt = require("jsonwebtoken");
const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require("uuid");
const user = require("../models/user");

const s3 = new S3();

const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  createWriting,
  show,
  showWriting,
  deleteOne,
  updateWriting,
  deleteWriting,
  postIndex,
  writingIndex
};

async function show(req, res) {
  const post = await Post.findById(req.params.id);
  const postUser = await User.findById(post.user);
  return res.json({ post: post, postUser: postUser });
}
async function showWriting(req, res) {
  const writing = await Writing.findById(req.params.id);
  const writingUser = await User.findById(writing.user);
  const comments = await Comment.find({writing: writing._id})
  let commentAndUser=[]
    for(const comment of comments){
      const user = await User.findById(comment.user)
      commentAndUser.push({comment: comment, user: user})
    }
  return res.json({ writing: writing, commentsAndUser: commentAndUser, writingUser: writingUser });
}

async function updateWriting(req, res) {
  const writing = await Writing.findByIdAndUpdate(req.body.id, {
    title: req.body.title,
    content: req.body.content,
  });
  return res.status(201).json({ writing });
}
function create(req, res) {
  try {
    const filePath = `${uuidv4()}/${req.file.originalname}`;
    const params = {
      Bucket: BUCKET_NAME,
      Key: filePath,
      Body: req.file.buffer,
    };
    s3.upload(params, async function (err, data) {
      if (err) {
        return res.json({ data: err });
      }
      const post = await Post.create({
        comment: req.body.comment,
        user: req.user,
        photoUrl: data.Location,
      });
      const populatedPost = await post.populate("user").execPopulate();
      return res.status(201).json({ post: populatedPost });
    });
  } catch (err) {
    console.log(err);
    return res.json({ err });
  }
}
async function createWriting(req, res) {
  console.log(req.body);
  const writing = Writing.create({
    title: req.body.title,
    user: req.body.user,
    content: req.body.content,
  });
  return res.status(201).json({ writing });
}
async function deleteOne(req, res) {
  // console.log(req.user)
  await Post.findByIdAndDelete(req.params.id);
  return res.status(200).json("complete");
}

async function deleteWriting(req, res) {
  // console.log(req.user)
  await Writing.findByIdAndDelete(req.params.id);
  return res.status(200).json("complete");
}
async function postIndex(req, res) {
  try {
    const posts = await Post.find({}).populate("user").exec();
    res.status(200).json({ posts });
  } catch (err) {}
}

async function writingIndex(req, res) {
  try {
    const writings = await Writing.find({}).populate("user").exec();
    res.status(200).json({ writings });
  } catch (err) {}
}