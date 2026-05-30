const express = require("express");
const router = express.Router();

const db = require("../db");


// GET all users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});


// CREATE user
router.post("/", (req, res) => {
  const { name, email } = req.body;

  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";

  db.query(sql, [name, email], (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({
        message: "User added",
        id: result.insertId,
      });
    }
  });
});


// UPDATE user
router.put("/:id", (req, res) => {
  const { name, email } = req.body;

  const sql =
    "UPDATE users SET name=?, email=? WHERE id=?";

  db.query(sql, [name, email, req.params.id], (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({
        message: "User updated",
      });
    }
  });
});


// DELETE user
router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM users WHERE id=?";

  db.query(sql, [req.params.id], (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({
        message: "User deleted",
      });
    }
  });
});

module.exports = router;