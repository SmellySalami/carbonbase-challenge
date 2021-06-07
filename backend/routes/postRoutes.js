const router = require("express").Router();
const Post = require("../models/postModel")

router.get("/test", (req, res) => {
    res.json({"message": "works"})
});

router.post("/", async (req, res) => {
    const {title, author, content} = req.body
    
    const newPost = new Post({
        title,
        author,
        content
    });

    try {
        const result = await newPost.save();
        res.json(result)
    } catch (err) {
        res.status(500).end("Internal Server Error")
    }
});

router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
})

router.get("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
})
module.exports = router;