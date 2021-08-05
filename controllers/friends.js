const User = require("../models/user");
const jwt = require("jsonwebtoken");

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
    await user.save();
    const token = createJWT(user); // user is the payload so this is the object in our jwt
    res.json({ token });
  } catch {}
}

async function removeFriend(req, res) {
  // console.log(req.params)
  try {
    const user = await User.findById(req.user._id);
    const removedUser = await User.findOne({ username: req.params.username });

    let index = await user.friends.indexOf(removedUser.id);
    let index2 = await removedUser.friends.indexOf(user._id);

    user.friends.splice(index, 1);
    removedUser.friends.splice(index2, 1);

    await user.save();
    await removedUser.save();
    const token = createJWT(user); // user is the payload so this is the object in our jwt
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
    user.friendRequests.splice(index, 1);
    // await user.save();
    // await approvedFriend.save()
    
    //hitting right up until here, 
    //and also hitting in jwt.Create helper
    //user can be logged properly before the return statement in helper
    const token = createJWT(user);
    console.log(token)
    //cannot log token, cannot console.log anything here, not hitting
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
