const router = require("express").Router();
const Invite = require("../models/inviteModel");

router.get("/", async (req, res) => {
    try {
        const invite = await Invite.find();
        res.json(invite);
    } catch (err) {
        console.log(err)
        res.status(500).end("Internal Server Error")
    }

});

router.post("/", async (req, res) => {

    const newInvite = new Invite();

    try {
        const result = await newInvite.save();
        res.json(result)
    } catch (err) {
        res.status(500).end("Internal Server Error")
    }
})

module.exports = router;