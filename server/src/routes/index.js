const express = require("express");
const booksRoutes = require("./books.routes");

const router = express.Router();

router.use("/books", booksRoutes);

module.exports = router;
