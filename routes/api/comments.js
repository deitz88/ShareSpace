const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/comments');


router.post('/writing/:id/addcomment', commentsCtrl.addWritingComment);
router.post('/post/:id/addcomment', commentsCtrl.addPhotoComment);
router.get('/delete/:id', commentsCtrl.deleteWritingComment)
router.get('/comment/:id', commentsCtrl.getComment)


module.exports = router;