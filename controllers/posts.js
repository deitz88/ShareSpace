const User = require('../models/user');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require("uuid");

const s3 = new S3();

const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
    create,
  };

  function create(req, res){
    // console.log(req.file, req.body, "this is create method", req.user);
    try {
      const filePath = `${uuidv4()}/${req.file.originalname}`;
      const params = {
        Bucket: BUCKET_NAME,
        Key: filePath,
        Body: req.file.buffer,
      };
      console.log(params, 'these are the params')
      s3.upload(params, async function (err, data) {
        if (err) {
         return res.json({ data: err });
        }
         console.log(data, '<------ this is the data from the post')
        const post = await Post.create({comment: req.body.comment, user: req.user, photoUrl: data.Location});
        const populatedPost = await post.populate("user").execPopulate();
        return res.status(201).json({ post: populatedPost });
    });
  } catch (err) {
    console.log(err);
    return res.json({ err });
  }
}