const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(session());
app.use((req, res, next) =>{
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

app.listen(PORT, () => {
  console.log(`HTTP server listening at http://localhost:${PORT}`)
});

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
    if (err) return console.log(err);
    console.log("MongoDB connection established")
});