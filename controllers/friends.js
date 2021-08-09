const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { useRef } = require("react");
const SECRET = process.env.SECRET;

module.exports = {
  sendRequest,
  denyRequest,
  acceptRequest,
  removeFriend,
};

async function sendRequest(req, res) {
  try {
    const requestedUser = await User.findById(req.params.id);
    requestedUser.friendRequests.push(req.user._id);
    await requestedUser.save();
    res.json(requestedUser);
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function denyRequest(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const denyRequestedUser = await User.findOne({
      username: req.params.username,
    });
    let index = user.friendRequests.indexOf(denyRequestedUser.id);
    user.friendRequests.splice(index, 1);
    const populatedUser = await user.populate('friends friendRequests').execPopulate()
    await user.save();
    const token = createJWT(populatedUser); // user is the payload so this is the object in our jwt
    res.json({ token });
  } catch {}
}

async function removeFriend(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const removedUser = await User.findOne({ username: req.params.username });

    let index = await user.friends.indexOf(removedUser.id);
    let index2 = await removedUser.friends.indexOf(user._id);

    user.friends.splice(index, 1);
    removedUser.friends.splice(index2, 1);
    const populatedUser = await user.populate('friends friendRequests').execPopulate()
    await user.save();
    await removedUser.save();
    const token = createJWT(populatedUser); // user is the payload so this is the object in our jwt
    res.json({ token });
  } catch {}
}

async function acceptRequest(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const approvedFriend = await User.findOne({
      username: req.params.username,
    });
     user.friends.push(approvedFriend.id);
     approvedFriend.friends.push(user.id);
    let index = user.friendRequests.indexOf(approvedFriend.id);
    await user.friendRequests.splice(index, 1);
    const populatedUser = await user.populate('friends friendRequests').execPopulate()
    await user.save();
    await approvedFriend.save()
    
    const token = createJWT(populatedUser);
    res.json({token});
  } catch {}
}

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}
