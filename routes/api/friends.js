const express = require('express');
const router = express.Router();
const friendsCtrl = require('../../controllers/friends');

router.get('/request/:id', friendsCtrl.sendRequest)
router.get('/requests', friendsCtrl.getRequests)
router.get('/friends', friendsCtrl.getFriends)
router.get('/deny/:username', friendsCtrl.denyRequest)
router.get('/approve/:username', friendsCtrl.acceptRequest)



module.exports = router;