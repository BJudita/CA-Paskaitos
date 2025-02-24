import PostModel from "../models/postModel.js";
import mongoose from "mongoose";

export async function getAllPosts(req, res) {
  try {
    const posts = await PostModel.find({}, { __v: 0 }); // paimk visk1 apart __v: 0 - nenori, __v: 1 nori
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getPostById(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Id" });
  }

  try {
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Article not found" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Incorrect input" });
  }
}

export async function createNewPost(req, res) {
  const { title, content, author, createdAt } = req.body;

  try {
    const newPost = new PostModel({
      title,
      content,
      author,
      createdAt,
    });

    const postResponse = await newPost.save();
    res.json(postResponse);
  } catch (error) {
    if (error.errors.model.name === "ValidatorError") {
      res.status(400).json({ error: "Post validation failed" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export async function updatePostById(req, res) {
    const { id } = req.params;
    const { title, content, author, createdAt } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid Id" });
      }

  try {
    const post = await PostModel.findById(id)
    if (!post) {
        return res.status(404).json({ error: "Article not found" });
      }

    post.title = title;
    post.content = content;
    post.author = author;
    post.createdAt = createdAt;

    await post.save();
    res.json(post);
  } catch (error) {
      res.status(500).json({ error: "Invalid server error" });
  }
}

export async function deletePostById(req, res) {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid Id" });
      }

      try {
const deletedPost = await PostModel.findByIdAndDelete(id);

if (!deletedPost) {
    return res.status(404).json({ error: "Article nor found"});
}
res.json(deletedPost);
      } catch (error) {
        res.status(500).json({ error: "Invalid server error" });
    }
}
