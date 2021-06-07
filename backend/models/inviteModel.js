const mongoose = require('mongoose');

let date = new Date();
date.setDate(date.getDate()+7);

const inviteSchema = new mongoose.Schema({ 
    code: {type: String, default:"a", required: true},
    expires: {type: Date, default:date,required: true},
}, 
{
    timestamps: true
});

module.exports = Invite = mongoose.model("invite", inviteSchema)