const router = require('express').Router();
const validation = require("../middlewares/validation")
const postSchema = require("../utils/postsValidation")
const {createPost, showAllPosts,commentPost} = require('../controllers/postController');
 
router.post('/',validation(postSchema),createPost);
router.get('/',showAllPosts);
router.post('/:postId/comments',commentPost);
module.exports = router;
