const express = require("express");
const router = express.Router();
const { Post, User } = require("../../models");

// get all posts
router.get("/api/1.0/posts/getAll", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: "user",
    });
    return res.json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// get posts of a particular user
router.get("/api/1.0/posts/get/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const posts = await Post.findAll({ where: { userId: userId } });
    return res.json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// add a post
router.post("/api/1.0/posts/create/:userId", async (req, res) => {
  const { userId } = req.params;
  const { title, description } = req.body;
  try {
    const user = await User.findOne({ where: { id: userId } });
    const result = await Post.create({ title, description, userId: user.id });
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// delete a post
router.delete("/api/1.0/posts/delete/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    await Post.destroy({ where: { id: postId } });
    return res.json("post deleted");
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// get a single post
router.get("/api/1.0/posts/getOne/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    const posts = await Post.findOne({ where: { id: postId } });
    return res.json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
