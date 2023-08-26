import { Request, Response } from "express";
import Post from "../models/Post";

const getPostController = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const createPostController = async (req: Request, res: Response) => {
  try {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const post = await Post.create({ title, body });

    return res.status(201).json(post);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updatePostController = async (req: Request, res: Response) => {
  try {
    const { id, title, body } = req.body;

    if (!id || !title || !body) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (title) {
      post.title = title;
    }
    if (body) {
      post.body = body;
    }

    await post.save();

    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletePostController = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Post id is required" });
    }

    await Post.findByIdAndDelete(id);
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  getPostController,
  createPostController,
  updatePostController,
  deletePostController,
};
