const { Pool } = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors")
const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const app = express();

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
  origin:"http://localhost:3000",
}))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.post("/sign-up", async (req, res) => {

  const { firstName, lastName, password, email } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432,
  })

  try {
    await pool.query("BEGIN");

    await pool.query(
      "INSERT INTO users (firstName, lastName, password, email) VALUES ($1, $2, $3, $4)",
      [firstName, lastName, hashedPassword, email]
    );

    await pool.query("COMMIT");

    const token = jsonwebtoken.sign(
      { userEmail: email },
      JWT_SECRET,
    );

    res.status(200).json({ message: "Success", token});
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const pool = await clientDb.connect();
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        await clientRedis.publish('login', email);

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
    pool.release();
  }
});