const express = require('express');
const router = express.Router();
const friendsCtrl = require('../../controllers/friends');

router.get('/request', friendsCtrl.sendRequest)