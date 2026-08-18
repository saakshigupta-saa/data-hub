const express = require("express");
const blogPosts = require("../data/posts");

const router = express.Router();

// GET /posts
router.get("/", (req, res) => {
  res.status(200).json(blogPosts);
});

// GET /posts/:id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  res.status(200).json(post);
});

// POST /posts
router.post("/", (req, res) => {
  const { title, content, author } = req.body;

  const newPost = {
    id: blogPosts.length + 1,
    title,
    content,
    author,
  };

  blogPosts.push(newPost);

  res.status(201).json({
    message: "Post created successfully",
    post: newPost,
  });
});

// PUT /posts/:id
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const { title, content, author } = req.body;

  post.title = title;
  post.content = content;
  post.author = author;

  res.status(200).json({
    message: "Post updated successfully",
    post,
  });
});

// DELETE /posts/:id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const postIndex = blogPosts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const deletedPost = blogPosts.splice(postIndex, 1);

  res.status(200).json({
    message: "Post deleted successfully",
    post: deletedPost[0],
  });
});

module.exports = router;