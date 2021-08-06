const User = require('../models/user');
const Writing = require('../models/writing')
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the construcotr
// now s3 can crud on our s3 buckets

module.exports = {
  signup,
  login,
  profile,
  sendRequest,
  friendList
};

async function profile(req, res){
  try {
    const user = await User.findOne({username: req.params.username})
    const posts = await Post.find({user: user._id})
    const writings = await Writing.find({user: user._id})
    if(!user) return res.status(404).json({message: 'Parameters not found'})
    return res.status(200).json({posts: posts, user: user, writings: writings})
  } catch(err){
    console.log(err)
    res.json({err})
  }
}
function friendList(req, res){

}

async function sendRequest(req, res){
  try {
    const user = await User.findOne({username: req.params.username})
    user.friendRequests.push({username: req.user.username, userId: req.user._id}); //mutating a document
    await user.save()// save it
    res.status(201).json({data: 'like added'})
} catch(err){
   
    res.json({data: err})
}
}

function signup(req, res) {
  console.log(req.body, req.file)

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  // FilePath unique name to be saved to our butckt
  const filePath = `${uuidv4()}/${req.file.originalname}`
  const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
  //your bucket name goes where collectorcat is 
  //////////////////////////////////////////////////////////////////////////////////
  s3.upload(params, async function(err, data){
    console.log(data, 'from aws') // data.Location is our photoUrl that exists on aws
    const user = new User({...req.body, photoUrl: data.Location});
    try {
      await user.save();
      const token = createJWT(user); // user is the payload so this is the object in our jwt
      res.json({ token });
    } catch (err) {
      console.log('catch error', err)
      // Probably a duplicate email
      res.status(400).json(err);
    }



  })
  //////////////////////////////////////////////////////////////////////////////////
 
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email}).populate('friends friendRequests');
    
    console.log(user, ' this user in login')
    if (!user) return res.status(401).json({err: 'bad credentials'});
    // had to update the password from req.body.pw, to req.body password
    user.comparePassword(req.body.password, (err, isMatch) => {
        
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}


/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
