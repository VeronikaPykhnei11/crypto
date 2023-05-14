module.exports = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (req.path === "/sign-up") {
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        error: "Missing credentials",
      });
    }
  }

  if (req.path === "/sign-in") {
    if (!email || !password) {
      return res.status(400).json({
        error: "Missing credentials",
      });
    }
  }
  next();
};
