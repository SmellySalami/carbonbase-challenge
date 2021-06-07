const router = require("express").Router();
const Post = require("../models/postModel")

router.get("/test", (req, res) => {
    res.json({"message": "works"})
});

router.post("/", async (req, res) => {
    const {title, author, content} = req.body
    console.log(title, author, content);

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


    res.json("herher");
});

router.get("/", async (req, res) => {
    // console.log(req.session)
    const posts = await Post.find();
    res.json(posts);
})

router.get("/:id", async (req, res) => {
    const posts = await Post.findById(req.params.id);
    res.json(posts);
})
module.exports = router;