const { Client } = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const clientDb = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.post("/sign-up", async (req, res) => {
  const { username, password, email } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const client = await clientDb.connect();
  try {
    await client.query("BEGIN");

    await client.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3)",
      [username, hashedPassword, email]
    );

    await client.query("COMMIT");

    res.status(200).json({ message: "User created" });
  } catch (e) {
    await client.query("ROLLBACK");
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.release();
  }
});

app.post("/sign-in", async (req, res) => {
  const { username, password } = req.body;

  const client = await clientDb.connect();
  try {
    const result = await client.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.release();
  }
});
