const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// routes for all parties
router.get("/parties", (req, res) => {
    const sql = `SELECT * FROM parties`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  });

// route for a single party
router.get("/parties/:id", (req, res) => {
    const id = [req.params.id];
    const sql = `SELECT * FROM parties WHERE id = ?`;
  
    db.query(sql, id, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: row,
      });
    });
  });

// party delete route
router.delete("/parties/:id", (req, res) => {
  const id = [req.params.id];
  console.log('line 41', id);
  const sql = `DELETE FROM parties WHERE id =?`;

  db.query(sql, id, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Party not found",
      });
    } else {
      res.json({
        message: "Deleted",
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

module.exports = router;