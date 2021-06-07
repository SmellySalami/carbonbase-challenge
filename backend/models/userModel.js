const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    hash: {type: String, required: true},
    groups: {type: [], required: true},
}, 
{
    timestamps: true
});

module.exports = Post = mongoose.model("user", userSchema)