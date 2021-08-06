const express = require('express');
const router = express.Router();
const likesCtrl = require('../../controllers/likes')

router.post('/posts/:id/likes', likesCtrl.addLike)
router.delete('/likes/:id', likesCtrl.deleteLike)
router.post('/posts/:id/likes', likesCtrl.addLikeWriting)

module.exports = router;