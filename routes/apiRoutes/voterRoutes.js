const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");

router.get("/voters", (req, res) => {
  const sql = `SELECT * FROM voters`;
  db.query(sql, (err, row) => {
    if (err) {
      err.status(500).json({ error: err.message });
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

router.get("/voters/:id", (req, res) => {
  const id = [req.params.id];
  const sql = `SELECT * FROM voters WHERE id = ?`;

  db.query(sql, id, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.json({
      message: "success",
      data: result,
    });
  });
});

router.post("/voters", ({ body }, res) => {
  const errors = inputCheck(body, "first_name", "last_name", "email");
  if (errors) {
    res.status(400).json({ error: errors.message });
    return;
  }
  // const id = [req.params.id];
  const sql = `INSERT INTO voters (first_name, last_name, email)
                    VALUES(?,?,?)`;
  const params = [body.first_name, body.last_name, body.email];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.json({
      message: "updated",
      data: body,
    });
  });
});

router.put("/voters/:id", (req, res) => {
  const errors = inputCheck(req.body, "email");
  if (errors) {
    res.status(400), json({ error: errors.message });
    return;
  }

  const sql = `UPDATE voters SET email = ? 
                WHERE id = ?`;
  const params = [req.body.email, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.json({
      message: "updated",
      change: result.affectedRows,
      id: req.params.id,
    });
  });
});

router.delete("/voters/:id", (req, res) => {
  const { id } = req.params;
  console.log("line 81", id);
  const sql = `DELETE FROM voters WHERE id = ?`;

  db.query(sql, id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
          message: 'Voter not found'
      })
    } else {
      res.json({
        message: "deleted",
        change: result.affectedRows,
        id: id,
      });
    }
  });
});

module.exports = router;
