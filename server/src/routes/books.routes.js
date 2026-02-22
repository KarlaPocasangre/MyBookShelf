const express = require("express");
const booksController = require("../controllers/books.controller");

const router = express.Router();

router.get("/", booksController.getAll);
router.post("/", booksController.create);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.update);
router.delete("/:id", booksController.remove);

module.exports = router;
