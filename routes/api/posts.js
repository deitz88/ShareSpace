const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer = require('multer');
const upload = multer();


router.post('/create', upload.single('photo'), postsCtrl.create);
router.get('/show/:id', postsCtrl.show)

module.exports = router;