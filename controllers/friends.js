const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    sendRequest,
    friendList
  };

  function sendRequest(req, res){
      console.log(req.body)
  }

  function friendList(req, res){
    console.log(req.body)
  }