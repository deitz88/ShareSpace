const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    sendRequest,
    friendList,
    getRequests, 
    denyRequest,
    acceptRequest,
    getFriends
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
    try { 
        const user = await User.findById(req.user._id)
        const requests = [] 
        for(let i=0; i<user.friendRequests.length; i++){
           let newObj = await User.findById(user.friendRequests[i])
           requests.push({newObj})
        }
        res.status(200).json(requests);
      } catch (err) {}
    }
    async function getFriends(req, res){
      console.log('hitting controller')  
      try { 
          const user = await User.findById(req.user._id)
          const friendsArray = [] 
          for(let i=0; i<user.friends.length; i++){
             let newObj = await User.findById(user.friends[i])
             friendsArray.push({newObj})
          }
          res.status(200).json(friendsArray);
        } catch (err) {}
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
        res.status(200).json(user.friendRequests);
      } catch {}
        
    }
    async function acceptRequest(req, res){

    try { 
        const user = await User.findById(req.user._id)
        const approvedFriend =
        await User.findOne({username: req.params.username})
        console.log(approvedFriend.id);
        user.friends.push(approvedFriend.id);
        let index = user.friendRequests.indexOf(approvedFriend.id);
        user.friendRequests.splice(index, 1);
        user.save();
        res.status(200).json(user.friendRequests);
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