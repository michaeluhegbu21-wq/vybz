
require("dotenv").config();

const express = require("express");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vybz backend is running!");
});

app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT current_database() AS database"
    );

    res.json({
      success: true,
      message: "Vybz database connected successfully!",
      database: result.rows[0].database,
    });
  } catch (error) {
    console.error("Database error:", error.message);

    res.status(500).json({
      success: false,
      message: "Database connection failed.",
    });
  }
});

app.get("/api/creators", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM creators ORDER BY id ASC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Creators error:", error.message);
    res.status(500).json({ error: "Could not retrieve creators." });
  }
});

app.listen(PORT, () => {
  console.log(`Vybz backend running at http://localhost:${PORT}`);
});
