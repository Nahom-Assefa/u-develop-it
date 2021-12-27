const express = require("express");
const res = require("express/lib/response");
const { result } = require("lodash");
const mysql = require("mysql2");
const inputCheck = require("./utils/inputCheck");

const PORT = process.env.PORT || 3002;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // mysql name
    user: "root",
    // password
    password: "Jadeboor305!",
    database: "election",
  },
  console.log("Connected to the election database.")
);

// Select all cryptocurrency
app.get("/api/crypto", (req, res) => {
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
app.get("/api/crypto/:id", (req, res) => {
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

// delete a cryptocurrency
app.delete("/api/crypto/:id", (req, res) => {
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

// create a cryptocurrency
app.post("/api/crypto", ({ body }, res) => {
  console.log("line 84", body);
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

// routes for all parties
app.get("/api/parties", (req, res) => {
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
app.get("/api/parties/:id", (req, res) => {
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

// update a crypto's party
app.put("/api/crypto/:id", (req, res) => {
  const errors = inputCheck(req.body, "party_id");

  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `UPDATE candidates SET party_id = ? 
               WHERE id = ?`;
  const params = [req.body.party_id, req.params.id];
  console.log('line 166', params);
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log('line 122, got here');
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

// party delete route
app.delete("/api/parties/:id", (req, res) => {
  const id = [req.params.id];
  const sql = `DELETE FROM parties WHERE id =?`;

  db.query(sql, id, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Party not found",
      });
    } else {
      res.json({
        message: "Deleted",
        data: row,
      });
    }
  });
});

// app.use((req, res) => {
//   res.status(404).end();
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
