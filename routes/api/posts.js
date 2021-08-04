const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer = require('multer');
const upload = multer();


router.post('/create', upload.single('photo'), postsCtrl.create);

module.exports = router;