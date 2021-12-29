const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");

// Select all cryptocurrency
router.get("/cryptos", (req, res) => {
  const sql = `SELECT candidates.*, parties.name
                 AS party_name
                 FROM candidates
                 LEFT join parties
                 ON candidates.party_id = parties.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.log(rows);
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Isolate one cryptocurrency
router.get("/crypto/:id", (req, res) => {
  const sql = `SELECT candidates.*, parties.name
                 AS party_name
                 FROM candidates
                 LEFT join parties
                 ON candidates.party_id = parties.id
                 WHERE candidates.id = ?
                 `;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
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

// Delete a cryptocurrency
router.delete("/crypto/:id", (req, res) => {
  const sql = `DELETE FROM candidates WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Candidate not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

// Create a cryptocurrency
router.post("/candidate", ( {body} , res) => {
  console.log("line 74", body);
  const errors = inputCheck(
    body,
    'first_name',
    'last_name',
    'industry_connected'
  );
  if (errors) {
    console.log("line 82", errors);
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
    VALUES (?,?,?)`;
  const params = [body.first_name, body.last_name, body.industry_connected];
  console.log("line 88", body);
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

router.post("/crypto", ({ body }, res) => {
    const errors = inputCheck(
      body,
      "first_name",
      "last_name",
      "industry_connected"
    );
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
    VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.industry_connected];
    db.query(sql, [params], (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: body,
      });
    });
  });



// update a crypto's party
router.put("/crypto/:id", (req, res) => {
  const errors = inputCheck(req.body, "party_id");

  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `UPDATE candidates SET party_id = ? 
                 WHERE id = ?`;
  const params = [req.body.party_id, req.params.id];
  console.log("line 166", params);
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log("line 122, got here");
      res.status(400).json({ error: err.message });
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: "Candidate not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

module.exports = router;
