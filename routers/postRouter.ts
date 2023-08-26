import express from "express";
import {
  getPostController,
  createPostController,
  updatePostController,
  deletePostController,
} from "../contollers/postController";

const router = express.Router();

router.get("/", getPostController);
router.post("/", createPostController);
router.put("/", updatePostController);
router.delete("/", deletePostController);

export default router;
