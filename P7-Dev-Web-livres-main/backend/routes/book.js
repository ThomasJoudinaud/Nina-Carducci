const express = require("express")
const auth = require("../middleware/auth")
const router = express.Router()
const bookController = require("../controllers/book")

router.get("/", bookController.getAllBooks)
router.get("/:id", bookController.getOneBook)
router.get("/bestrating", (req, res, next) => {})
router.post("/", auth, bookController.createBook)
router.put("/:id", auth, bookController.modifyBook)
router.delete("/:id", auth, bookController.deleteBook)
router.post("/:id/rating", auth, (req, res, next) => {})

module.exports = router