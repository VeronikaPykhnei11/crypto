const bcrypt = require("bcrypt");
const pool = require("../db");
const jsonwebtoken = require('jsonwebtoken');

const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

//FORGOT PASSWORD CONTROLLER
module.exports.forgot_password = async (req, res) => {
  const { email } = req.body;

  const user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

  if (user.rows.length === 0) {
    return res.status(404).json({
      error: "Sorry! An account with that email address doesn't exist",
    });
  } else {
    return res.status(200).json({
      email: user.rows[0].email,
    });
  }
};

//RESET PASSWORD CONTROLLER
module.exports.reset_password = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(404).json({
        error: "Sorry! An account with that email address doesn't exist",
      });
    } else {
      bcrypt.hash(password, 10, async (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({
            error:
              "An error occured while reseting your password. Please try again!",
          });
        } else {
          await pool.query("UPDATE users SET password=$2 WHERE email=$1", [
            email,
            hashedPassword,
          ]);

          const token = jsonwebtoken.sign(
            { userEmail: email },
            JWT_SECRET,
          );

          res.status(200).json({
            password: "Password updated successfully!",
            token,
          });
        }
      });
    }
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};
