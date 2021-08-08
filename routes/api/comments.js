const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/comments');


router.post('/writing/:id/addcomment', commentsCtrl.addWritingComment);


module.exports = router;