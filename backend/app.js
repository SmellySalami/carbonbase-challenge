const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(session({
  secret:'carbonbase',
}));
app.use((req, res, next) =>{
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});
app.use(cors());

// routes
app.use("/post", require("./routes/postRoutes"));
app.use("/auth", require("./routes/authRoutes"));

// db connection
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
  if (err) return console.log(err);
  console.log("MongoDB connection established")
});

app.listen(PORT, () => {
  console.log(`HTTP server listening at http://localhost:${PORT}`)
});

