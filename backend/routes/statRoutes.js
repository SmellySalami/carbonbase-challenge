const router = require("express").Router();
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

router.get("/", async (req, res) => {
    try {
        let date = new Date();
        date.setDate(date.getDate()-7);
        const posts = await Post.find();
        const comments = await Comment.find({createdAt: {$gte: date}});
        res.json({posts: posts.length, comments: comments.length} );
    } catch (err) {
        console.log(err)
        res.status(500).end("Internal Server Error")
    }

});

module.exports = router;