const express = require('express');
const router = express.Router();
const likesCtrl = require('../../controllers/likes')

//*-------------------------  coments  ----------------------------*//
router.post('/comments/:id/likes', likesCtrl.addLikeComment)
router.delete('/likes/:id', likesCtrl.deleteLike)
router.delete('/commentlikes/:id', likesCtrl.deleteLikeComment)
//*-------------------------  writing  ----------------------------*//
router.post('/writings/:id/likes', likesCtrl.addLikeWriting)
router.delete('/writinglikes/:id', likesCtrl.deleteLikeWriting)
//*-------------------------  photo  ----------------------------*//
router.post('/posts/:id/likes', likesCtrl.addLike)
router.post('/posts/:id/likes', likesCtrl.addLikePost)

module.exports = router;