const express = require('express');
const router = express.Router();
const friendsCtrl = require('../../controllers/friends');

router.get('/request/:id', friendsCtrl.sendRequest)
router.get('/deny/:username', friendsCtrl.denyRequest)
router.get('/approve/:username', friendsCtrl.acceptRequest)
router.get('/remove/:username', friendsCtrl.removeFriend)



module.exports = router;