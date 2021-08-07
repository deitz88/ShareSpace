const express = require('express');
const router = express.Router();
const likesCtrl = require('../../controllers/likes')

router.post('/posts/:id/likes', likesCtrl.addLike)
router.post('/writings/:id/likes', likesCtrl.addLikeWriting)
router.delete('/likes/:id', likesCtrl.deleteLike)
router.delete('/writinglikes/:id', likesCtrl.deleteLikeWriting)
router.post('/posts/:id/likes', likesCtrl.addLikeWriting)

module.exports = router;