const Post = require("../models/post");
const multer = require('multer');
const upload = multer();
const Comment = require("../models/comment");
exports.createPost = async(req,res) => {
    try {
        const {title,body} = req.body;
        const post = await Post.create({title,body});
        // if (req.file) {
        //     const { originalname, buffer } = req.file;
      
        //     // Determine the attachment type based on the file extension
        //     const extension = originalname.split('.').pop().toLowerCase();
        //     let attachmentModel;
      
        //     switch (extension) {
        //       case 'pdf':
        //         attachmentModel = PdfAttachment;
        //         break;
        //       case 'jpg':
        //       case 'jpeg':
        //       case 'png':
        //         attachmentModel = ImageAttachment;
        //         break;
        //       case 'docx':
        //         attachmentModel = DocxAttachment;
        //         break;
        //       default:
        //         throw new Error('Invalid file type')
        //     }
        // }
        res.status(201).json({
            message: "Post created successfully"
        })
        
    } catch (error) {
        console.error('Failed to create post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }


}
exports.showAllPosts = async(req,res) => {
    try {
        const { page } = req.query;
        const offset = (page - 1) * PAGE_SIZE;
    
       
        const posts = await Post.findAll({
          limit: PAGE_SIZE,
          offset,
          include: [PdfAttachment, ImageAttachment, DocxAttachment],
          order: [['createdAt', 'DESC']],
        });
    
        res.json(posts);
      } catch (error) {
        console.error('Failed to retrieve posts:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

exports.commentPost = async(req,res) =>{
    try {
        const {body} = req.body;
        const {postId} = req.params
        const post = await Post.findByPk(postId)
        if(!post){
            return res.status(404).json(
                {
                    message: "Post not found  "
                }
            )
        }
     const comment = await Comment.create({
        body,
        postId
     })
     res.status(201).json(comment)
        

    } catch (error) {
        console.error('Failed to add comment:', error);
        res.status(500).json({ message: 'Internal server error' });
        
    }

}