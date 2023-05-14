const bcrypt = require("bcrypt");
const pool = require("../db");
const jsonwebtoken = require('jsonwebtoken');
const { Pool } = require('pg');

const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";


//USER REGISTRATION CONTROLLER
module.exports.user_sign_up = async (req, res) => {
  try {
    let { firstName, lastName, email, password } = req.body;
    const pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "postgres",
      password: "postgres",
      port: 5432,
    })

    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      res.status(409).json({
        error: "Sorry! An account with that email address already exists!",
      });
    } else {
      bcrypt.hash(password, 10, async (err, hashedPassword) => {
        if (err) {
          res.status(500).json({
            error: err.message,
          });
        } else {
          firstName = firstName[0].toUpperCase() + firstName.slice(1);
          lastName = lastName[0].toUpperCase() + lastName.slice(1);

          await pool.query("BEGIN");

          await pool.query(
            "INSERT INTO users (firstName, lastName, password, email) VALUES ($1, $2, $3, $4)",
            [firstName, lastName, hashedPassword, email]
          );

          await pool.query("COMMIT");

          res.status(200).json({
            message: `Account created successfully!`,
            firstName,
            lastName
          });
        }
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};

//USER LOGIN CONTROLLER

module.exports.user_sign_in = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (user.rows.length === 0) {
      res.status(404).json({
        error: "Sorry! An account with that email doesn't exist!",
      });
    } else {
      bcrypt.compare(password, user.rows[0].password, (err, validPassword) => {
        if (err) {
          res.status(401).json({
            error: "Sorry! Email or password is incorrect",
          });
        } else if (validPassword) {
          const token = jsonwebtoken.sign(
            { userEmail: email },
            JWT_SECRET,
          );
          console.log(user.rows[0])

          res.json({
            message: "Login successfully!",
            token,
            firstName: user.rows[0].firstname,
            lastName: user.rows[0].lastname,
            email,
          });
        } else {
          res.status(401).json({
            error: "Sorry! Email or password is incorrect",
          });
        }
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};

//USER TOKEN VERIFY

module.exports.user_token_verify = async (req, res) => {
  try {
    //return response if authorization is met else return an error
    res.status(200).json({ authorized: true });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};