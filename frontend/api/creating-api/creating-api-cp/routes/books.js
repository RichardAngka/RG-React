import express from "express";

import {
  getBooks,
  createBook,
  getBook,
  deleteBook,
  updateBook,
} from "../controllers/books.js";

const router = express.Router();

router.get("/", getBooks);

router.post("/", createBook);

router.get("/:id", getBook);

// TODO: answer here
router.delete("/:bookId", deleteBook);

router.patch("/:bookId", updateBook);

export default router;
