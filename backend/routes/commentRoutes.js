const router = require("express").Router();
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

router.post("/", async (req, res) => {
    const {postID, author, content} = req.body

    const newComment = new Comment({
        postID,
        author,
        content
    });

    try {
        const postIDExist = await Post.findById(postID);
        if(!postIDExist) res.status(404).end("postID " + " does not exist");
        const result = await newComment.save();
        res.json(result)
    } catch (err) {
        res.status(500).end("Internal Server Error")
    }
});

// The ID is the post ID
router.get("/:id", async (req, res) => {
    try{
        const post = await Comment.find({postID: req.params.id});
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).end("Internal Server Error");
    }

})
module.exports = router;