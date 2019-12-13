const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../models/posts");

//!Create a post
router.post("/posts", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    await post.save();
    res.status(201).send(post);
  } catch (e) {
    res.status(400).send(e);
  }
});

//!Find a specific posr
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

//!Delete a specific post
router.delete("/post/:id", async (req, res) => {
  try {
    const post = await Post.remove({ _id: req.params.id });
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

//!Update a specific post
router.patch("/post/:id", async (req, res) => {
  try {
    const post = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

//!Delete all post

router.delete("/post", async (req, res) => {
  try {
    const post = await Post.remove();
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

//!Listing all the post
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.send(post);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
