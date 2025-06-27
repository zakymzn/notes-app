const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
const authMiddleware = require("../middleware/authMiddleware");

// Semua route butuh token
router.post("/", authMiddleware, noteController.createNote);
router.get("/", authMiddleware, noteController.getNotes);
router.get("/:id", authMiddleware, noteController.getNoteById);
router.put("/:id", authMiddleware, noteController.updateNote);
router.delete("/:id", authMiddleware, noteController.deleteNote);

module.exports = router;
