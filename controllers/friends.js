const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    sendRequest,
    friendList,
    getRequests
  };

async function sendRequest(req, res){
    // console.log(req.user)
    try{
    const requestedUser = await User.findById(req.params.id)
    console.log(requestedUser.friendRequests, '<--------requested user')
    const addFriend = req.user._id
    await requestedUser.friendRequests.push(addFriend)
    // requestedUser.friendRequests.pop()
    requestedUser.save()
    const newFriend = requestedUser.friendRequests[0].populate()
    console.log(newFriend)
    // console.log(loggedUser, '<---- logged in' )
    // const token = createJWT(user);
    // res.json({token}); 
} catch (err) {
    return res.status(401).json(err);
  }
}

async function getRequests(req, res){
    console.log('hitting controller')  
    try { 
        const user = await User.findById(req.user._id)
        const requests = [] 
        // const requests = await user.friendRequests.populate("id").execPopulate();
        for(let i=0; i<user.friendRequests.length; i++){
           let newObj = await User.findById(user.friendRequests[i])
           requests.push({newObj})
        }
        res.status(200).json(requests);
      } catch (err) {}
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