const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({ 
    postID: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
}, 
{
    timestamps: true
});

module.exports = Comment = mongoose.model("comment", commentSchema)