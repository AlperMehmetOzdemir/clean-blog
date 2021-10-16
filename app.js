const express = require('express');
const mongoose = require("mongoose");
const path = require("path")
const ejs = require("ejs")
const Post = require("./models/Post");

const app = express();

const PORT = 5000;

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/cleanblog-test-db';
mongoose.connect(mongoDB, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set("view engine", "ejs")

// MIDDLEWARES
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//ROUTES
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  console.log(`posts`, posts)
  res.render("index", {
    posts
  });
});

app.get('/about', (req, res) => {
  res.render("about");
});

app.get('/post', (req, res) => {
  res.render("post");
});

app.get('/add_post', (req, res) => {
  res.render("add_post");
});

app.post("/posts", async (req,res) => {
  await Post.create(req.body);
  res.redirect("/");
})

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
