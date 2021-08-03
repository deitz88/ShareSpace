const express = require('express');
const router = express.Router();
const friendsCtrl = require('../../controllers/friends');

router.get('/request/:id', friendsCtrl.sendRequest)
router.get('/requests', friendsCtrl.getRequests)



module.exports = router;