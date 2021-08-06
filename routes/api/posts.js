const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer = require('multer');
const upload = multer();


router.post('/create', upload.single('photo'), postsCtrl.create);
router.post('/createwriting', postsCtrl.createWriting)
router.post('/updatewriting/:id', postsCtrl.updateWriting)
router.get('/show/:id', postsCtrl.show)
router.get('/writing/:id', postsCtrl.showWriting)
router.get('/delete/:id', postsCtrl.deleteOne)
router.get('/deletewriting/:id', postsCtrl.deleteWriting)
router.get('/mainPhoto', postsCtrl.postIndex)

module.exports = router;