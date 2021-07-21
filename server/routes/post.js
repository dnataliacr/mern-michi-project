import express from "express";

import { getPost } from "../controllers/post.js"

const router = express.Router();

router.get("/", (req, res) => {
  res.send("THIS WORKS");
});

export default router;
