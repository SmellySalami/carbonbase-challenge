const router = require("express").Router();
const User = require("../models/userModel");
const Invite = require("../models/inviteModel");
const bcrypt = require('bcrypt');
const isAuth = require("./authHelper");


router.post("/signup", async (req, res) => {
    const {name, email, password, invite} = req.body

    if(!name || !email || !password || !invite) return res.status(400).end("Bad Request");

    // see if user exists
    try {
        let query = await User.findOne({email:email}).exec()
        if (query) return res.status(409).end(query.email + " is already registerd");

        query = await Invite.find({code: invite}).exec()
        if (query.length == 0) return res.status(404).end("Not invited :(");

        const hash = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            hash,
        })

        query = await newUser.save()
        // req.session.name = name;
        // req.session.email = email;

        res.json({name:name, email:email });

    } catch (err) {
        console.log(err);
        res.status(500).end("Unexpected Error");
    }

});

router.post("/signin", async(req, res) =>{
    const {email, password} = req.body

    if(!email || !password) return res.status(400).end("Bad Request");

    try{

        const query = await User.findOne({email:email}).exec();
        if (!query) return res.status(401).end("no such user")
        const valid = await bcrypt.compare(password, query.hash);
        if (!valid) return res.status(401).end("wrong password")

        // req.session.name = query.name;
        // req.session.email = query.email;
        // console.log(req.session)

        res.json({name:query.name, email:query.email})

    } catch (err) {
        console.log(err);
        res.status(500).end("Unexpected Error");
    }
    
});

router.post("/signout", isAuth, async(req, res) => {
    const {email} = req.body
    if(!email) return res.status(400).end("Bad Request");
    // req.session.destroy()
    return res.json("user " + email +" signed out")
});

module.exports = router;