const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const multer = require('multer');
const upload = multer();
/*---------- Public Routes ----------*/
router.post('/signup', upload.single('photo'), usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/:username', usersCtrl.profile);
router.get('/friends', usersCtrl.friendList)
router.post('/request', usersCtrl.sendRequest)

/*---------- Protected Routes ----------*/




module.exports = router;