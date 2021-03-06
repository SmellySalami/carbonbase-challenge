const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true}
}, 
{
    timestamps: true
});

module.exports = Post = mongoose.model("post", postSchema)