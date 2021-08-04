const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    sendRequest,
    friendList,
    denyRequest,
    acceptRequest,
    removeFriend,
  };

async function sendRequest(req, res){
    try{
    const requestedUser = await User.findById(req.params.id)
    const addFriend = req.user._id
    await requestedUser.friendRequests.push(addFriend)
    requestedUser.save()
    // const token = createJWT(user);
    // res.json({token}); 
    res.status(200).json(requestedUser);
} catch (err) {
    return res.status(401).json(err);
  }
}

  function friendList(req, res){
    console.log(req.params)
  }

  async function denyRequest(req, res){
    try { 
        const user = await User.findById(req.user._id)
        const denyRequestedUser =
        await User.findOne({username: req.params.username});
        let index = user.friendRequests.indexOf(denyRequestedUser.id);
        user.friendRequests.splice(index, 1);
        user.save();
        return res.status(200).json(user);
      } catch {}
        
    }

  async function removeFriend(req, res){
    try { 
        const user = await User.findById(req.user._id)
        const removedUser =
        await User.findOne({username: req.params.username});
        let index = await user.friends.indexOf(removedUser.id);
        let index2 = await removedUser.friends.indexOf(user._id);
        console.log(index2, 'user id in removed Uder friends array')
        user.friends.splice(index, 1);
        removeUser.friends.spice(index2, 1)
        user.save();
        removeUser.save()
        return res.status(200).json(user);
      } catch {}
        
    }

  async function acceptRequest(req, res){
    try { 
        const user = await User.findById(req.user._id)
        const approvedFriend =
        await User.findOne({username: req.params.username})
        console.log(user, 'this is user')
        console.log(approvedFriend, 'this is approvedFriend')
        user.friends.push(approvedFriend.id);
        console.log(user.friends, 'this is user friends array')
        approvedFriend.friends.push(user.id)
        console.log(user.id, 'this is user.id')
        console.log(approvedFriend.friends, 'this is approvedFriend friends array')
        let index = user.friendRequests.indexOf(approvedFriend.id);
        user.friendRequests.splice(index, 1);
        user.save();
        approvedFriend.save()
        return res.status(200).json(user);
      } catch {}
        
    }

  function friendList(req, res){
    console.log(req.body)
  }














  function createJWT(user) {
    return jwt.sign(
      {user}, // data payload
      SECRET,
      {expiresIn: '24h'}
    );
  }